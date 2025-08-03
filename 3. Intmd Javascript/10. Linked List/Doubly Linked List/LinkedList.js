export class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);

    if (!this.head) {
      this.head = this.tail = newNode;
      return;
    }
    
    this.head.prev = newNode;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  head() {
    return this.head;
  }

  tail() {
    return this.tail;
  }

  at(index) {
    let count = 0;
    let current = this.head;

    while (current) {
      if (count === index) return current;
      count++;
      current = current.next;
    }

    return null;
  }

  pop() {
    if (!this.tail) return null;

    const removed = this.tail;

    if (this.head === this.tail) {
      this.head = this.tail = null;
    }
    else {
      this.tail = removed.prev;
      this.tail.next = null;
    }

    return removed;
  }

  contains(value) {
    let current = this.head;
    
    while (current) {
      if (current.value === value) return true;
      current = current.next;
    }

    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      index++;
      current = current.next;
    }
    return null;
  }

  toString() {
    let str = '';
    let current = this.head;

    while(current) {
      str += `( ${current.value} ) <—> `;
      current = current.next;
    }

    str += 'null';
    return str;
  }

  insertAt(index, value) {
    if (index === 0) {
      this.prepend(value);
      return;
    }

    const prevNode = this.at(index - 1);
    if (!prevNode) return;

    const nextNode = prevNode.next;
    const newNode = new Node(value, nextNode, prevNode);

    prevNode.next = newNode;
    if (nextNode) {
      nextNode.prev = newNode;
    } else {
      this.tail = newNode; // new tail if inserted at end
    }
  }

  removeAt(index) {
    const node = this.at(index);
    if (!node) return;

    if (node === this.head) {
      this.head = node.next;
      if (this.head) this.head.prev = null;
      if (node === this.tail) this.tail = null;
    }
    else if (node === this.tail) {
      this.tail = node.prev;
      this.tail.next = null;
    }
    else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  }
}