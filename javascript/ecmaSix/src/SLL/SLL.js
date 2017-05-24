/* SLL - singly linked list */

import { SLLNode } from './SLLNode.js';

class SLL {
    constructor() {
        this.head = null;
    } 
    /* print values of the list */
    print() {
        if (this.head) {
            this.head.print();
        } else {
            console.log("empty list");
        }
    }
    /* insert new node to the front of the list */
    insertFront(val) {
        if (this.head) {
            let newNode = new SLLNode(val);
            newNode.next = this.head;
            this.head = newNode;
        } else {
            this.head = new SLLNode(val);
        }
        return this;
    }
    /* add a new node to the end of the list */
    add(val) {
        if (this.head) {
            this.head.add(val); 
        } else {
            this.head = new SLLNode(val);
        }
        return this;
    }
    /* insert new node before first occurence of node with given value */
    insertBefore(val, targetVal) {
        if (this.head) {
            if (this.head.val === targetVal) {
                this.insertFront(val);
            } else {
                this.head.insertBefore(val, targetVal);
            }
        } else {
            this.head = new SLLNode(val);
        }
        return this;
    }
    /* insert new node after node with given value */
    insertAfter(val, targetVal) {
        if (this.head) {
            this.head.insertAfter(val, targetVal);
        } else {
            this.add(val);
        }
        return this;
    }
    /* remove node with given value */
    remove(val) {
        if (this.head) {
            if (this.head.val === val) {
                this.head = this.head.next;
            } else {
                this.head.remove(val);
            }
        } else {
            // empty list. do nothing
        }
        return this;
    }
    /* remove nodes with duplicate values from list */
    removeDuplicates() {
        if (this.head) {
            this.head.removeDuplicates();
        } else {
            // empty list. do nothing
        }
        return this;
    }
    /* check if list contains a node with a given value 
     * returns true if found, false otherwise 
     */
    contains(val) {
        if (this.head) {
            return this.head.contains(val);
        } else {
            return false;
        }
    }
    /* reverse: reverse list iteratively */
    reverse() {
        if (this.head) {
            let reversed = this.head.reverse();
            this.head = reversed;
        } else {
            // empty list. do nothing
        }
        return this;
    }
    /* reverse_recursive: reverse list recursively */
    reverse_recursively() {
        if (this.head) {
            let reversed = this.head.reverse_recursively(this.head);
            this.head = reversed;
        } else {
            // empty list. do nothing
        }
        return this;
    }

}
export { SLL };
