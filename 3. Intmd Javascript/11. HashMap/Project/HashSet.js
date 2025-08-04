export class HashSet {
  constructor(capacity = 16, loadFactor = 0.75) {
    this.capacity = capacity;
    this.loadFactor = loadFactor;
    this.count = 0;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
  }

  _validateKey(key) {
    if (typeof key !== "string") {
      throw new Error("Only string keys are allowed");
    }
  }

  _hash(key) {
    let hash = 0;
    const prime = 31;

    for (let i = 0; i < key.length; i++) {
      hash = (hash * prime + key.charCodeAt(i)) % this.capacity;
    }

    return hash;
  }

  _resize() {
    const oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.count = 0;

    for (const bucket of oldBuckets) {
      for (const key of bucket) {
        this.set(key); // re-insert keys into new buckets
      }
    }
  }

  set(key) {
    this._validateKey(key);

    const index = this._hash(key);
    const bucket = this.buckets[index];

    if (!bucket.includes(key)) {
      bucket.push(key);
      this.count++;

      if (this.count / this.capacity > this.loadFactor) {
        this._resize();
      }
    }
  }

  has(key) {
    this._validateKey(key);

    const index = this._hash(key);
    return this.buckets[index].includes(key);
  }

  get(key) {
    return this.has(key) ? key : null;
  }

  remove(key) {
    this._validateKey(key);

    const index = this._hash(key);
    const bucket = this.buckets[index];
    const keyIndex = bucket.indexOf(key);

    if (keyIndex !== -1) {
      bucket.splice(keyIndex, 1);
      this.count--;
      return true;
    }

    return false;
  }

  length() {
    return this.count;
  }

  clear() {
    this.buckets = new Array(this.capacity).fill(null).map(() => []);
    this.count = 0;
  }

  entries() {
    return this.#flattenBuckets().map(key => [key]);
  }

  // Private utility method
  #flattenBuckets() {
    return this.buckets.flat();
  }
}
