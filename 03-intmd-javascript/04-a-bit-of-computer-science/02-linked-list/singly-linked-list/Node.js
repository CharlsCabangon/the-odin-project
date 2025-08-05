// The basic unit of storage in the list

export class Node {
  constructor (value = null, nextNode = null) {
    this.value = value; // The actual data
    this.nextNode = nextNode; // A reference (i.e., pointer) to the next node in the list.
  }
}