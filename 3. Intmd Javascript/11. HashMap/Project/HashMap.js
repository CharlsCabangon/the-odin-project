import { LinkedList } from "./LinkedList.js";

export class HashMap {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity; // The number of buckets available
    this.loadFactor = loadFactor; // Determines when to resize
    this.count = 0; // Number of actual key-value pairs
    this.buckets = Array.from({ length: capacity }, () => new LinkedList());
  }

  _hash(key) {
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

  _validateKey(key) {
    if (typeof key !== 'string') {
      throw new Error("Only string keys allowed");
    }
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.count = 0;
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());

    for (let bucket of oldBuckets) {
      for (const node of bucket) {
        this.set(node.key, node.value); // Re-hash and insert all entries
      }
    }
  }

  set(key, value) {
    this._validateKey(key);

    // Resize if loadFactor is exceeded
    if ((this.count + 1) / this.capacity > this.loadFactor) {
      this._resize();
    }

    const index = this._hash(key);
    const bucket = this.buckets[index];
    const existingNode = bucket.find(key);

    if (existingNode) {
      existingNode.value = value;
    } else {
      bucket.append(key, value);
      this.count++;
    }
  }

  get(key) {
    this._validateKey(key);

    const node = this.buckets[this._hash(key)].find(key);

    return node ? node.value[1] : null;
  }

  has(key) {
    this._validateKey(key);

    return this.get(key) !== null; // Reuses get method, returns true or false
  }

  remove(key) {
    this._validateKey(key);

    const bucket = this.buckets[this._hash(key)];
    const removed = bucket.remove(key);

    if (removed) this.count--;

    return removed;
  }

  size() {
    return this.count;
  }

  clear() {
    this.buckets = Array.from({ length: this.capacity }, () => new LinkedList());
    this.count = 0;
  }

  keys() {
    const keys = [];

    for (const bucket of this.buckets) {
      for (const node of bucket) {
        keys.push(node.key);
      }
    }

    return keys;
  }

  values() {
    const values = [];

    for (const bucket of this.buckets) {
      for (const node of bucket) {
        values.push(node.value);
      }
    }

    return values;
  }

  entries() {
    const entries = [];

    for (const bucket of this.buckets) {
      for (const node of bucket) {
        entries.push([node.key, node.value]);
      }
    }

    return entries;
  }
}