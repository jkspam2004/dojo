/* SLLNode - singly linked list node */

class SLLNode {
    constructor(val) {
        this.next = null;
        this.val = val;
    }
    /* print values of the list */
    print() {
        let current = this;
        while (current) {
            console.log(current.val);
            current = current.next;
        }
    }
    /* add new node to the end of the list */
    add(val) {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = new SLLNode(val);
    }
    /* insert new node before first occurrence of node with given value */
    insertBefore(val, targetVal) {
        let current = this;
        let prev = this;

        while (current.next) {
            current = current.next;
            if (current.val === targetVal) {
                let newNode = new SLLNode(val);
                newNode.next = current;
                prev.next = newNode;
                break;
            }
            prev = current;
        }
    }
    /* insert new node after first occurrence of node with given value */
    insertAfter(val, targetVal) {
        let current = this;

        while (current) {
            if (current.val === targetVal) {
                let newNode = new SLLNode(val);
                newNode.next = current.next;
                current.next = newNode;
                break; // break here. insert after first occurrence only
            }
            current = current.next;
        }
    }
    /* remove node with given value */
    remove(val) {
        let current = this;
        let prev = this;

        while (current.next) {
            current = current.next;
            if (current.val === val) {
                prev.next = current.next; // remove current
                break;
            }
            prev = current;
        }
    }
    /* remove all nodes with given value */
    removeAll(val) {
        let current = this;
        let prev = this;

        while (current.next) {
            current = current.next;
            if (current.val === val) {
                prev.next = current.next; // remove current
            } else {
                prev = current;
            }
        }
    }
    /* remove nodes with duplicate values from list */
    removeDuplicates() {
        let current = this;
        let prev = this;
        let seenObj = {};
        seenObj[current.val] = 1;

        while (current.next) {
            current = current.next;
            if (seenObj && seenObj.hasOwnProperty(current.val)) { // remove current if it equals previous
                prev.next = current.next;
            } else {
                seenObj[current.val] = 1;
            }
            prev = current;
        }
    }
    /* contains: check if list contains a node with a given value
     * returns true if found, false otherwise
     */
    contains(val) {
        let current = this;
        while (current) {
            if (current.val === val) {
                return true;
            }
        }
        return false;
    }
    /* reverse: reverse linked list */
    reverse() {
        let prev = null,
            current = this;

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return prev;
    }
    /* has_cycle: determine if linked list has a cycle
       returns true if has cycle, false if no cycle
     */
    has_cycle() {
        let slow = this;
        let fast = this.next ? this.next.next : null;

        while (slow && fast) {
            if (slow == fast) {
                return true
            }

            slow = slow.next;
            fast = fast.next ? fast.next.next : null;
        }
        return false;
    }
}

/* reverse_recursive: reverse list recursively */
SLLNode.prototype.reverse_recursively = function (current) {
    if (!current.next) {
        return current;
    }
    let head = this.reverse_recursively(current.next);
    let next = current.next;
    next.next = current;
    current.next = null;
    return head;
}

export { SLLNode };

/* Notes:
    while (current) { // at the last node, you enter loop and move up current
        current = current.next
    }
    // current will end up at null, what the last node was pointing to

    while (current.next) { // at the last node, next is null so don't enter loop
        current = current.next
    }
    // current will be the last node here

*/
