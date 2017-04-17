"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BST = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BSTNode = require("./BSTNode");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BST = function () {
    function BST() {
        _classCallCheck(this, BST);

        this.root = null;
    }

    // left, current, right


    _createClass(BST, [{
        key: "traverseInOrder",
        value: function (_traverseInOrder) {
            function traverseInOrder() {
                return _traverseInOrder.apply(this, arguments);
            }

            traverseInOrder.toString = function () {
                return _traverseInOrder.toString();
            };

            return traverseInOrder;
        }(function () {
            var node = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.root;

            if (!node) {
                return;
            }

            if (node.left) {
                traverseInOrder(node.left);
            }
            console.log(node.val);
            if (node.right) {
                traverseInOrder(node.right);
            }

            return;
        })
    }, {
        key: "find",
        value: function (_find) {
            function find(_x) {
                return _find.apply(this, arguments);
            }

            find.toString = function () {
                return _find.toString();
            };

            return find;
        }(function (val) {
            var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;

            if (!node) {
                return node;
            }

            if (val == node.val) {
                return node;
            } else if (val < node.val) {
                if (node.left) {
                    find(val, node.left);
                } else {
                    return node;
                }
            } else if (val > node.val) {
                if (node.right) {
                    find(val, node.right);
                } else {
                    return node;
                }
            }
        })
    }, {
        key: "add",
        value: function add(val) {
            var node = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.root;

            var position = this.find(val, node);

            if (!position) {
                this.root = new _BSTNode.BSTNode(val);
            } else if (val < position.val) {
                position.left = new _BSTNode.BSTNode(val);
            } else if (val > position.val) {
                position.right = new _BSTNode.BSTNode(val);
            }
            return this;
        }
    }]);

    return BST;
}();

exports.BST = BST;