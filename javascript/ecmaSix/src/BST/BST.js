import {BSTNode} from "./BSTNode"

class BST {
    constructor() {
        this.root = null;
    }

    // left, current, right
    traverseInOrder(node=this.root) {
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
    }

    find(val, node=this.root) {
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
    }

    add(val, node=this.root) {
        let position = this.find(val, node);

        if (!position) {
            this.root = new BSTNode(val);
        } else if (val < position.val) {
            position.left = new BSTNode(val);
        } else if (val > position.val) {
            position.right = new BSTNode(val);
        }
        return this;
    }
    
}

export {BST};
