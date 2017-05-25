'use strict';

var _SLL = require('./SLL.js');

var _SLLNode = require('./SLLNode.js');

var list = new _SLL.SLL();
//list.add(1).add(3).insertFront(0).insertBefore(2, 3).print();
//list.add(4).add(3).add(3).insertBefore(2, 3).add(3).print();
//list.add(3).add(2).add(2).insertAfter(1, 2).add(2).print()
//list.add(2).add(5).add(4).remove(4).print();
//list.add(2).add(2).add(3).add(2).removeDuplicates().print()
//list.add(1).add(2).add(3).add(4).add(5).reverse_recursively().print()

var a = new _SLLNode.SLLNode(1);
var b = new _SLLNode.SLLNode(2);
var c = new _SLLNode.SLLNode(3);
var d = new _SLLNode.SLLNode(4);
var e = new _SLLNode.SLLNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = b;

var list2 = new _SLL.SLL();
list2.head = a;
console.log(list2.has_cycle());