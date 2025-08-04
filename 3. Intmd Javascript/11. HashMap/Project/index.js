import { HashMap } from "./HashMap.js";

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