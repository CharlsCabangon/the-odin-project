import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("apple");
list.append("orange");
list.append("banana");
list.append("grapes");
list.append("mango");
list.prepend("pineapple");
list.pop();

console.log(list.toString());
console.log(list.size());
console.log(list.at(3));
console.log(list.contains("pear"));
console.log(list.find("apple"));

list.insertAt(3, "watermelon");
console.log(list.toString());
list.removeAt(3);
console.log(list.toString());