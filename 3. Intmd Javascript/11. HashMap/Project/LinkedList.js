export class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  append(key, value) {
    const newNode = new Node(key, value);
    
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }

    current.next = newNode;
  }

  find(key) {
    let current = this.head;

    while (current) {
      if (current.key === key) return current;
      current = current.next;
    }
    return null;
  }

  remove(key) {
    let current = this.head;
    let prev = null;

    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.next = current.next; // Bypass the current node
        } else {
          this.head = current.next; // Node to remove is the head
        }
        return true;
      }
      prev = current;            // Move prev to current
      current = current.next;    // Move current forward
    }

    return false; // key not found
  }
  
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }
}