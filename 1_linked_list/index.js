function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

// O(1)
LinkedList.prototype.addToHead = function (value) {
  const newNode = new Node(value, this.head, null);
  if (this.head) {
    this.head.prev = newNode;
  } else {
    this.tail = newNode;
  }
  this.head = newNode;
};

// O(1)
LinkedList.prototype.addToTail = function (value) {
  const newNode = new Node(value, null, this.tail);
  if (this.tail) {
    this.tail.next = newNode;
  } else {
    this.head = newNode;
  }
  this.tail = newNode;
};

// O(1)
LinkedList.prototype.removeHead = function () {
  if (!this.head) return null;
  let val = this.head.value;
  this.head = this.head.next;
  if (this.head) {
    this.head.prev = null;
  } else {
    this.tail = null;
  }
  return val;
};

// O(1)
LinkedList.prototype.removeTail = function () {
  if (!this.tail) return null;
  let val = this.tail.value;
  this.tail = this.tail.prev;
  if (this.tail) {
    this.tail.next = null;
  } else {
    this.head = null;
  }
  return val;
};

// O(n)
LinkedList.prototype.search = function (searchValue) {
  let currNode = this.head;
  while (currNode) {
    if (currNode.value === searchValue) return currNode.value;
    currNode = currNode.next;
  }
  return null;
};

// O(n)
LinkedList.prototype.indexOf = function (value) {
  let indexes = [];
  let currIndex = 0;
  let currNode = this.head;
  while (currNode) {
    if (currNode.value === value) {
      indexes.push(currIndex);
    }
    currNode = currNode.next;
    currIndex++;
  }
  return indexes;
};
