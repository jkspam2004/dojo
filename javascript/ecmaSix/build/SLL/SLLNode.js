"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* SLLNode - singly linked list node */

var SLLNode = function () {
    function SLLNode(val) {
        _classCallCheck(this, SLLNode);

        this.next = null;
        this.val = val;
    }
    /* print values of the list */


    _createClass(SLLNode, [{
        key: "print",
        value: function print() {
            var current = this;
            while (current) {
                console.log(current.val);
                current = current.next;
            }
        }
        /* add new node to the end of the list */

    }, {
        key: "add",
        value: function add(val) {
            var current = this;
            while (current.next) {
                current = current.next;
            }
            current.next = new SLLNode(val);
        }
        /* insert new node before first occurrence of node with given value */

    }, {
        key: "insertBefore",
        value: function insertBefore(val, targetVal) {
            var current = this;
            var prev = this;

            while (current.next) {
                current = current.next;
                if (current.val === targetVal) {
                    var newNode = new SLLNode(val);
                    newNode.next = current;
                    prev.next = newNode;
                    break;
                }
                prev = current;
            }
        }
        /* insert new node after first occurrence of node with given value */

    }, {
        key: "insertAfter",
        value: function insertAfter(val, targetVal) {
            var current = this;

            while (current) {
                if (current.val === targetVal) {
                    var newNode = new SLLNode(val);
                    newNode.next = current.next;
                    current.next = newNode;
                    break; // break here. insert after first occurrence only
                }
                current = current.next;
            }
        }
        /* remove node with given value */

    }, {
        key: "remove",
        value: function remove(val) {
            var current = this;
            var prev = this;

            while (current.next) {
                current = current.next;
                if (current.val === val) {
                    prev.next = current.next; // remove current
                    break;
                }
                prev = current;
            }
        }
        /* remove nodes with duplicate values from list */

    }, {
        key: "removeDuplicates",
        value: function removeDuplicates() {
            var current = this;
            var prev = this;
            var seenObj = {};
            seenObj[current.val] = 1;

            while (current.next) {
                current = current.next;
                if (seenObj && seenObj.hasOwnProperty(current.val)) {
                    // remove current if it equals previous
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

    }, {
        key: "contains",
        value: function contains(val) {
            var current = this;
            while (current) {
                if (current.val === val) {
                    return true;
                }
            }
            return false;
        }
        /* reverse: reverse linked list */

    }, {
        key: "reverse",
        value: function reverse() {
            var prev = null,
                current = this;

            while (current) {
                var next = current.next;
                current.next = prev;
                prev = current;
                current = next;
            }
            return prev;
        }
        /* has_cycle: determine if linked list has a cycle
           returns true if has cycle, false if no cycle
         */

    }, {
        key: "has_cycle",
        value: function has_cycle() {
            var slow = this;
            var fast = this.next ? this.next.next : null;

            while (slow && fast) {
                if (slow == fast) {
                    return true;
                }

                slow = slow.next;
                fast = fast.next ? fast.next.next : null;
            }
            return false;
        }
    }]);

    return SLLNode;
}();

/* reverse_recursive: reverse list recursively */


SLLNode.prototype.reverse_recursively = function (current) {
    if (!current.next) {
        return current;
    }
    var head = this.reverse_recursively(current.next);
    var next = current.next;
    next.next = current;
    current.next = null;
    return head;
};

exports.SLLNode = SLLNode;

/*
    while (current) { // at the last node, you enter loop and move up current
        current = current.next
    }
    // current will end up at null, what the last node was pointing to

    while (current.next) { // at the last node, next is null so don't enter loop
        current = current.next
    }
    // current will be the last node here

*/