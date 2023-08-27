// Define Node
class Node {
  constructor(node) {
    this.val = node;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.size = 0;
  }

  // Add element to the end
  append(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    // this.size++;
  }

  // Add element to the start of the list
  prepend(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let next = this.head;
      // let next = current.next;
      this.head = newNode;
      let current = this.head;
      current.next = next;
    }
    // this.size++;
  }

  // Return size of the linked List
  size() {
    if (this.head === null) return 0;
    let current = this.head;
    let size = 0;
    while (current !== null) {
      size++;
      current = current.next;
    }
    return size;
  }
}
const elements = [3, 2, 4, 5, 6, 8, 1, 0];
const newList = new LinkedList();
for (element of elements) {
  newList.append(element);
}

newList.prepend(11);
console.log(newList);
console.log('size', newList.size())