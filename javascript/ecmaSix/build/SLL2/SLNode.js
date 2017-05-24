"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* SLNode - singly linked list node */

var SLNode = function SLNode(val) {
    _classCallCheck(this, SLNode);

    this.val = val;
    this.next = null;
};

exports.SLNode = SLNode;