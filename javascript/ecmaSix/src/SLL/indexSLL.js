import { SLL } from './SLL.js';
import { SLLNode } from './SLLNode.js';

let list = new SLL();
//list.add(1).add(3).insertFront(0).insertBefore(2, 3).print();
//list.add(4).add(3).add(3).insertBefore(2, 3).add(3).print();
//list.add(3).add(2).add(2).insertAfter(1, 2).add(2).print()
//list.add(2).add(5).add(4).remove(4).print();
//list.add(2).add(2).add(3).add(2).removeDuplicates().print()
//list.add(1).add(2).add(3).add(4).add(5).reverse_recursively().print()

let a = new SLLNode(1);
let b = new SLLNode(2);
let c = new SLLNode(3);
let d = new SLLNode(4);
let e = new SLLNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = b;

let list2 = new SLL();
list2.head = a;
console.log(list2.has_cycle());


