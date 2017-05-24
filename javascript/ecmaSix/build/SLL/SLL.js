"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SLL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* SLL - singly linked list */

var _SLLNode = require("./SLLNode.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SLL = function () {
    function SLL() {
        _classCallCheck(this, SLL);

        this.head = null;
    }
    /* print values of the list */


    _createClass(SLL, [{
        key: "print",
        value: function print() {
            if (this.head) {
                this.head.print();
            } else {
                console.log("empty list");
            }
        }
        /* insert new node to the front of the list */

    }, {
        key: "insertFront",
        value: function insertFront(val) {
            if (this.head) {
                var newNode = new _SLLNode.SLLNode(val);
                newNode.next = this.head;
                this.head = newNode;
            } else {
                this.head = new _SLLNode.SLLNode(val);
            }
            return this;
        }
        /* add a new node to the end of the list */

    }, {
        key: "add",
        value: function add(val) {
            if (this.head) {
                this.head.add(val);
            } else {
                this.head = new _SLLNode.SLLNode(val);
            }
            return this;
        }
        /* insert new node before first occurence of node with given value */

    }, {
        key: "insertBefore",
        value: function insertBefore(val, targetVal) {
            if (this.head) {
                if (this.head.val === targetVal) {
                    this.insertFront(val);
                } else {
                    this.head.insertBefore(val, targetVal);
                }
            } else {
                this.head = new _SLLNode.SLLNode(val);
            }
            return this;
        }
        /* insert new node after node with given value */

    }, {
        key: "insertAfter",
        value: function insertAfter(val, targetVal) {
            if (this.head) {
                this.head.insertAfter(val, targetVal);
            } else {
                this.add(val);
            }
            return this;
        }
        /* remove node with given value */

    }, {
        key: "remove",
        value: function remove(val) {
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

    }, {
        key: "removeDuplicates",
        value: function removeDuplicates() {
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

    }, {
        key: "contains",
        value: function contains(val) {
            if (this.head) {
                return this.head.contains(val);
            } else {
                return false;
            }
        }
        /* reverse: reverse list iteratively */

    }, {
        key: "reverse",
        value: function reverse() {
            if (this.head) {
                var reversed = this.head.reverse();
                this.head = reversed;
            } else {
                // empty list. do nothing
            }
            return this;
        }
        /* reverse_recursive: reverse list recursively */

    }, {
        key: "reverse_recursively",
        value: function reverse_recursively() {
            if (this.head) {
                var reversed = this.head.reverse_recursively(this.head);
                this.head = reversed;
            } else {
                // empty list. do nothing
            }
            return this;
        }
    }]);

    return SLL;
}();

exports.SLL = SLL;