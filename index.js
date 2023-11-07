const { Stack, Queue, LinkedList } = require('./dataStructures');

// Stack
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Stack:', stack.toString());
console.log('Stack Length:', stack.length());

// Queue
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log('Queue:', queue.toString());
console.log('Queue Length:', queue.length());

// Linked List
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(0);
console.log('Linked List:', linkedList.toString());
console.log('Linked List Length:', linkedList.length());