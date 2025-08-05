import { HashMap } from "./HashMap.js";
import { HashSet } from "./HashSet.js";

// Override _hash to force collisions (for testing only)
class DebugHashMap extends HashMap {
  _hash(key) {
    // Force specific hash values for collision testing
    if (key === 'ab' || key === 'ba') return 1;
    if (key === 'cd' || key === 'dc') return 2;
    return super._hash(key); // fallback
  }
}

const map = new DebugHashMap();

// Insert keys that will collide
map.set('ab', 1);
map.set('ba', 2); // Same bucket as 'ab'

map.set('cd', 3);
map.set('dc', 4); // Same bucket as 'cd'

// Print entries from the colliding buckets
console.log("Bucket 1:");
for (const node of map.buckets[1]) {
  console.log(`${node.key}: ${node.value}`);
}

console.log("\nBucket 2:");
for (const node of map.buckets[2]) {
  console.log(`${node.key}: ${node.value}`);
}

console.log(`\n${map.keys()}`);
console.log(`\n${map.values()}`);
console.log(`\n${map.entries()}`);

const hashset = new HashSet();

hashset.set("apple");
hashset.set("orange");
hashset.set("grapes");
hashset.set("banana");
hashset.set("watermelon");
hashset.set("apple");
hashset.set("apple");
hashset.set("blueberry");


console.log(hashset.has("blueberry"));
console.log(hashset.get("blueberry"));
console.log(hashset.entries());
console.log(hashset.length())

hashset.remove("banana");
console.log(hashset.entries());

hashset.clear();
console.log(hashset.entries());
