/* SLL class - singly linked list */

import {SLNode} from "./SLNode";

class SLL {
    constructor() {
        this.head = null;
    }

    /* add new node to the end of the list */
    add(val) {
        if (!this.head) {
            this.head = new SLNode(val);
            return this;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = new SLNode(val);
        return this;
    }

    /* remove node with given value */
    remove(val) {
        if (!this.head) {
            return this;
        }
        let curr = this.head;
        if (curr.val == val) {
            this.head = curr.next;
            return this;
        }
        while (curr.next) {
            if (curr.next.val == val) {
                curr.next = (curr.next.next) ? curr.next.next : null;
            } else {
                curr = curr.next;
            }
        }
        return this;
    }

    /* check if list contains node with given value */
    contains(val) {
        if (!this.head) {
            return this;
        }
        let curr = this.head;
        while (curr) {
            if (curr.val == val) {
                return true;
            } else {
                curr = curr.next;
            }
        }
        return false;
    }

    /* print out the list */
    show() {
        let curr = this.head;
        while (curr) {
            console.log(curr.val);
            curr = curr.next;
        }
        return;
    }

    /* insert node with given value before node with given value */
    insertBefore(val, before) {
        if (!this.contains(before)) {
            return false;
        }
        let curr = this.head;
        let prev = curr;

        if (curr.val == before) {
            let newNode = new SLNode(val);
            newNode.next = curr;

            this.head = newNode;
            return true;
        }

        while (curr) {
            curr = curr.next;
            prev.next = curr;
            console.log(curr.val);
            if (curr.val == before) {
                let newNode = new SLNode(val);
                newNode.next = curr;
                if (prev == this.head) {
                    this.head = newNode;
                } else {
                    prev.next = newNode;
                }
                return true;
            }
            prev = prev.next;
        }
        return false;
    }
    
}

export {SLL};
