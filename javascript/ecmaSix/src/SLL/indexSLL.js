import {SLL} from "./SLL";

let x = new SLL();
x.add(3).add(4).add(6).add(7).add(8);//.remove(3);
console.log(`contains: ${x.contains(8)}`);
console.log(`insertBefore: ${x.insertBefore(2,3)}`);
x.show();
