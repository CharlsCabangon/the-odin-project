import { LinkedList } from "./LinkedList";

export class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity; // The number of buckets available
    this.loadFactor = loadFactor; // Determines when to resize
    this.count = 0; // Number of actual key-value pairs
    this.buckets = Array.from({ length: capacity }, () => new LinkedList());
  }

  hash(key) {
    if (typeof key !== 'string') {
      throw new Error("Only string keys allowed"); // Key restriction
    }

    let hashCode = 0;
    const prime = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * prime + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode; // Final index for this key
  }

  set(key, value) {
    if (typeof key !== 'string') {
      throw new Error("Only string keys allowed");
    }

    // if ((this.count + 1) / this.capacity > this.loadFactor) {
    //   throw new Error("Capacity exceeded");
    // }

    // Resize if loadFactor is exceeded
    if ((this.count + 1) / this.capacity > this.loadFactor) {
      this.resize();
    }

    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Index out of bounds");
    }

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, _] = bucket[i];
      if (storedKey === key) {
        bucket[i][1] = value; // Update value if key exists
        return;
      }
    }

    bucket.push([key, value]); // Otherwise, insert new key-value
    this.count++;
  }

  get(key) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Index out of bounds");
    }

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      const [storedKey, storedValue] = bucket[i];
      if (storedKey === key) {
        return storedValue;
      }
    }

    return null; // Key not found
  }

  has(key) {
    return this.get(key) !== null; // Reuses get method, returns true or false
  }

  remove(key) {
    const index = this.hash(key);

    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Index out of bounds");
    }

    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1); // Remove the item
        this.count--;
        return true;
      }
    }

    return false; // Key not found
  }

  length() {
    return this.count;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.count = 0;
  }

  keys() {
    const result = [];

    for (let bucket of this.buckets) {
      for (let [key, _] of bucket) {
        result.push(key);
      }
    }

    return result;
  }

  values() {
    const result = [];

    for (let bucket of this.buckets) {
      for (let [_, value] of bucket) {
        result.push(value);
      }
    }

    return result;
  }

  entries() {
    const result = [];

    for (let bucket of this.buckets) {
      for (let pair of bucket) {
        result.push(pair);
      }
    }

    return result;
  }

  resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.count = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);

    for (let bucket of oldBuckets) {
      for (let [key, value] of bucket) {
        this.set(key, value); // Re-hash all entries
      }
    }
  }
}