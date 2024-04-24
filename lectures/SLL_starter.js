// Node that will be in our singly linked lists
class SLLNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// Singly linked list itself
class SLL {
    constructor() {
        this.head = null; // Head is the start of the list
    }
}

let firstNode = new SLLNode(10);
console.log(firstNode);
let secondNode = new SLLNode(15);
// How do we connect the 10 node to the 15 node such that the next node after the 10 node is the 15 node?
firstNode.next = secondNode;
console.log("After connecting the 2 nodes:");
console.log(firstNode);
// Empty linked list
let firstSLL = new SLL();
console.log(firstSLL);