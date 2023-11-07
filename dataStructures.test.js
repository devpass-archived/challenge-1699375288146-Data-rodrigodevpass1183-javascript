const { Stack, Queue, LinkedList } = require('./dataStructures');

// Stack tests
test('Stack push and length', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.length()).toBe(3);
});

test('Stack pop', () => {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  stack.push(3);
  expect(stack.pop()).toBe(3);
  expect(stack.length()).toBe(2);
});

// Queue tests
test('Queue enqueue and length', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.length()).toBe(3);
});

test('Queue dequeue', () => {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  expect(queue.dequeue()).toBe(1);
  expect(queue.length()).toBe(2);
});

// LinkedList tests
test('Append to LinkedList', () => {
  const linkedList = new LinkedList();
  linkedList.append(1);
  linkedList.append(2);
  linkedList.append(3);
  expect(linkedList.length()).toBe(3);
});

test('Prepend to LinkedList', () => {
  const linkedList = new LinkedList();
  linkedList.prepend(1);
  linkedList.prepend(2);
  linkedList.prepend(3);
  expect(linkedList.length()).toBe(3);
  expect(linkedList.toString()).toBe('3 -> 2 -> 1');
});