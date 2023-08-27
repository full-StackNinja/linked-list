// Define Node
class Node {
  constructor(node) {
    this.val = node | null;
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

  // get Node at given index
  at(index) {
    const listSize = this.size();
    if (index > listSize || index === 0) return null;
    let currentIndex = 1;
    let current = this.head;
    while (currentIndex < index) {
      currentIndex++;
      current = current.next;
    }
    return current;
  }
  // Remove last node
  pop() {
    if (this.head === null) return null;
    let current = this.head;
    let prev = current;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    return current;
  }

  // Check if value is contained by the list
  contains(value) {
    if (this.head === null) return null;
    let current = this.head;
    while (current !== null) {
      if (current.val === value) return true;
      current = current.next;
    }
    return false;
  }

  // Find value in the list
  find(value) {
    if (this.head === null) return null;
    let current = this.head;
    while (current !== null) {
      if (current.val === value) return current;
      current = current.next;
    }
    return null;
  }

  // Insert at given index
  insertAt(value, index) {
    const size = this.size();
    if (this.head === null || index > size) return null;
    const newNode = new Node(value);
    let current = this.head;
    let prev = current;
    let iter = 1;
    while (iter !== index) {
      iter++;
      prev = current;
      current = current.next;
    }
    prev.next = newNode;
    newNode.next = current;
  }

  // Remove node at given index
  removeAt(index) {
    if (this.head === null || index > this.size()) return null;
    if (index === 1) {
      this.head = this.head.next;
    }
    let current = this.head;
    let prev = current;
    let iter = 1;
    while (iter !== index) {
      iter++;
      prev = current;
      current = current.next;
    }
    if (current.next === null) {
      prev.next = null;
    } else {
      prev.next = current.next;
    }
  }

  // Represent linkedList as string to view them
  toString() {
    if (this.head === null) return null;
    let current = this.head;
    let listToStr = [];
    while (current !== null) {
      listToStr.push(`(${current.val}) -> `);
      current = current.next;
    }
    listToStr.push("null");
    return listToStr.join("");
  }
}

const elements = [3, 2, 4, 5, 6, 8, 1, 7];
const newList = new LinkedList();
for (element of elements) {
  newList.append(element);
}

// Tests for all the methods of linkedList:

// newList.prepend(11);

// console.log("pop", newList.pop(5));
// console.log(newList.insertAt(12, 9));

// console.log(newList.size());
// console.log(newList.tail());
// console.log(newList.contains(7));
// console.log("find", newList.find(7));
// newList.removeAt(1);
// console.log("new List", newList, newList.size());
console.log(newList.toString());
