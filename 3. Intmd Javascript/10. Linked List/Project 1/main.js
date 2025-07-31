import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("Charls");
list.append("Cabangon");
list.append("Cabs");
list.prepend("Dev");

console.log(list.toString());
console.log(list.size());
console.log(list.head());
console.log(list.tail());
console.log(list.at(2));
console.log(list.pop());
console.log(list.contains("Charls"));
console.log(list.find("Dev"));
list.insertAt(1, "Frontend");
console.log(list.removeAt(3));
console.log(list.toString());
