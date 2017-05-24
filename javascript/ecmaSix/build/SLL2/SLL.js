"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SLL = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* SLL class - singly linked list */

var _SLNode = require("./SLNode");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SLL = function () {
    function SLL() {
        _classCallCheck(this, SLL);

        this.head = null;
    }

    /* add new node to the end of the list */


    _createClass(SLL, [{
        key: "add",
        value: function add(val) {
            if (!this.head) {
                this.head = new _SLNode.SLNode(val);
                return this;
            }
            var curr = this.head;
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = new _SLNode.SLNode(val);
            return this;
        }

        /* remove node with given value */

    }, {
        key: "remove",
        value: function remove(val) {
            if (!this.head) {
                return this;
            }
            var curr = this.head;
            if (curr.val == val) {
                this.head = curr.next;
                return this;
            }
            while (curr.next) {
                if (curr.next.val == val) {
                    curr.next = curr.next.next ? curr.next.next : null;
                } else {
                    curr = curr.next;
                }
            }
            return this;
        }

        /* check if list contains node with given value */

    }, {
        key: "contains",
        value: function contains(val) {
            if (!this.head) {
                return this;
            }
            var curr = this.head;
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

    }, {
        key: "show",
        value: function show() {
            var curr = this.head;
            while (curr) {
                console.log(curr.val);
                curr = curr.next;
            }
            return;
        }

        /* insert node with given value before node with given value */

    }, {
        key: "insertBefore",
        value: function insertBefore(val, before) {
            if (!this.contains(before)) {
                return false;
            }
            var curr = this.head;
            var prev = curr;

            if (curr.val == before) {
                var newNode = new _SLNode.SLNode(val);
                newNode.next = curr;

                this.head = newNode;
                return true;
            }

            while (curr) {
                curr = curr.next;
                prev.next = curr;
                console.log(curr.val);
                if (curr.val == before) {
                    var _newNode = new _SLNode.SLNode(val);
                    _newNode.next = curr;
                    if (prev == this.head) {
                        this.head = _newNode;
                    } else {
                        prev.next = _newNode;
                    }
                    return true;
                }
                prev = prev.next;
            }
            return false;
        }
    }]);

    return SLL;
}();

exports.SLL = SLL;