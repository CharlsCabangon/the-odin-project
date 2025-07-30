import { Node } from "./Node.js";

export class LinkedList {
  constructor () {
    this.headNode = null;
  }
  // Adds a node to the END of the list.
  append(value) {
    const newNode = new Node(value);
    if (!this.headNode) { // If list is empty, new node becomes the head
      this.headNode = newNode;
      return;
    }
    let current = this.headNode; // Start from the head
    while (current.nextNode) { // Traverse until last node
      current = current.nextNode;
    }
    current.nextNode = newNode; // Point the last node to the new node

  }

  // Adds a node to the START of the list.
  prepend(value) {
    const newNode = new Node(value, this.headNode); // Create new node and link it to current head
    this.headNode = newNode; // Set new node as the head
  }

  // Returns the total number of nodes in the list
  size() {
    let count = 0;
    let current = this.headNode;
    while (current) {
      count++;
      current = current.nextNode;
    }
    return count;
  }

  // Returns the first node in the list
  head() {
    return this.headNode;
  }

  // Returns the last node in the list
  tail() {
    let current = this.headNode;
    if (!current) return null;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  // Returns the node at a given index (0-based)
  at(index) {
    let current = this.headNode;
    let count = 0;
    while(current) {
      if (count === index) return current;
      count++;
      current = current.nextNode;
    }
    return null;
  }

  // Removes the last node from the list
  pop() {
    if (!this.headNode) return null; // List is empty
    if (!this.headNode.nextNode) { // Only one node
      this.headNode = null;
      return;
    }
    let current = this.headNode;

    // This loop moves current forward until it reaches the second-to-last node.
    // We want to stop at the second-to-last node so we can safely remove the last node.
    while (current.nextNode && current.nextNode.nextNode) {
      current = current.nextNode;
    }
    current.nextNode = null;
  }

  // Checks if a value exists in the list
  contains(value) {
  let current = this.headNode;
  while (current) {
    if (current.value === value) return true;
    current = current.nextNode;
    }
  return false;
  }

  // Returns the index of the node containing the value (or null if not found)
  find(value) {
    let current = this.headNode;
    let index = 0;
    while (current) {
      if (current.value === value) return index;
      index++;
      current = current.nextNode;
    }
    return null;
  }

  // Returns a string representation of the list
  toString() {
    let str = '';
    let current = this.headNode;
    while (current) {
      str += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    str += 'null';
    return str;
  }

   // Inserts a new node with value at the given index
  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
      return;
    }
    let prev = this.at(index - 1); // Get node before insertion point
    if (!prev) return; // Index out of bounds
    const newNode = new Node(value, prev.nextNode); // Link new node to next
    prev.nextNode = newNode; // Link previous node to new node
  }

  // Removes node at a specific index
  removeAt(index) {
    if (index === 0) {
      this.headNode = this.headNode ? this.headNode.nextNode : null;
      return;
    }
    let prev = this.at(index - 1); // Node before the one to remove
    if (!prev || !prev.nextNode) return; // Invalid index
    prev.nextNode = prev.nextNode.nextNode; // Bypass the removed node
  }
}