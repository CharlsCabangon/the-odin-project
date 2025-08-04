import { HashMap } from "./HashMap.js";
import { LinkedList } from "./LinkedList.js";

const hashmap = new HashMap();

hashmap.set('apple', 'red');
hashmap.set('banana', 'yellow');
hashmap.set('carrot', 'orange');
hashmap.set('dog', 'brown');
hashmap.set('elephant', 'gray');
hashmap.set('frog', 'green');
hashmap.set('grape', 'purple');
hashmap.set('hat', 'black');
hashmap.set('ice cream', 'white');
hashmap.set('jacket', 'blue');
hashmap.set('kite', 'pink');
hashmap.set('lion', 'golden');
hashmap.set('sky', 'pink');
hashmap.set('grass', 'green');
hashmap.set('wine', 'burgundy');
hashmap.set('moon', 'silver');
hashmap.set('coin', 'bronze');


console.log(hashmap.entries());
console.log(hashmap.capacity);
console.log(hashmap.size())
console.log(hashmap.get("apple"));
console.log(hashmap.has("sky"));
console.log(hashmap.keys());
console.log(hashmap.values())

const list = new LinkedList();
