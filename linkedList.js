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
  }

  // Add element to the start of the list
  prepend(element) {
    const newNode = new Node(element);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let next = this.head;

      this.head = newNode;
      let current = this.head;
      current.next = next;
    }
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

  // Return head node
  headNode() {
    return this.head;
  }

  // Return tail node
  tail() {
    if (this.head === null) return null;
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    return current;
  }
}
const elements = [3, 2, 4, 5, 6, 8, 1, 7];
const newList = new LinkedList();
for (element of elements) {
  newList.append(element);
}

newList.prepend(11);
console.log(newList);
console.log("tail Node", newList.tail());
