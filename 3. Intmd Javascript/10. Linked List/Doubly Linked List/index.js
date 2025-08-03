import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("apple");
list.append("orange");
list.append("banana");
list.pop();

console.log(list.toString());
