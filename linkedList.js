/*
* @name  linkedListNode
* @description Class representing a Node
* @param String value: the value of the node
*/

class Node {
  constructor(value) {
    this._value = value;
    this._next = null;
    this._prev = null;
  }

  get value() {
    return this._value;
  }

  get next() {
    return this._next;
  }
  set next(value) {
    this._next = value;
  }

  get prev() {
    return this._prev;
  }
  set prev(value) {
    this._prev = value;
  }

  customToString() {
    let str = ('prev: ' + this._prev.value + ', value: ' +
      this._value + ', next: '  + this._next.value);
    return str;
  }
}

class LinkedList {
  constructor() {
    this._head = null;
    this._tail = null;
    this._indices = 0;
  }

  get head() {
    return this._head;
  }
  set head(value) {
    this._head = value;
  }

  get tail() {
    return this._tail;
  }
  set tail(value) {
    this._tail = value;
  }

  get length() {
    //works like an array
    if(this.head === null) {
      //if the list is empty, length is 0
      return 0;
    }
    //otherwise, return the human-readable number of entries
    return (this._indices + 1);
  }

  add(value) {
    //create a new node
    let addedNode = new Node(value);

    //if we have no head, make this new node the head
    if(this.head === null) {
      this.head = addedNode;
      //get the last entry and make it the previous of our added node
      this.head.prev = this.getAt(this._indices);
    } else {
      //get the last entry and make it the previous of our added node
      addedNode.prev = this.getAt(this._indices);
      //update the head's prev to point to our new node, which will be our new tail
      this.head.prev = addedNode;
      //if we already have a head, increment the number of entries
      this._indices++;
    }


    //if we already have a tail, update its next to point to the new node
    if(this.tail !== null) {
      this.tail.next = addedNode;
    }

    //make the new node be the tail, and set its next to point to the head
    this.tail = addedNode;
    this.tail.next = this.head;

    return addedNode;
  }

  remove(index) {
    //if the index exists in the list
    if(this.getAt(index) !== false) {
      //if we are not on the head
      let toRemove = this.getAt(index);
      if(index > 0) {
        //the node before toRemove's next should point to toRemove's next
        toRemove.prev.next = toRemove.next;
        if(index < indices) {
          //if we are not on the tail
          toRemove.next.prev = toRemove.prev;
        } else {
          //if we are on the tail
          this.tail = toRemove.prev;
          this.tail.next = this.head;
          this.head.prev = this.tail;
        }
      } else {
        //if we are on the head
        //the head is now whatever was after it
        this.head = this.head.next;
        //the new head's prev is the tail
        this.head.prev = this.tail;
        //the tail's next must be the head
        this.tail.next = this.head;
      }
      this._indices--;
      this.tail = this.getAt(this._indices);
    } else {
      return false;
    }
  }

  getAt(index) {
    let foundNode = false; //default case, node not found
    let node = this.head; //start at the head, using a temp variable to traverse

    //if we have a head and our index is valid
    if(node !== null && index >= 0) {
      for(let i = 0; i <= this._indices; i++) {
        if(i === index) {
          //if our index is present in the list, return what's there
          foundNode = node;
          break;
        }
        if(node.next !== null){
          //advance to the next node
          node = node.next;
        }
      }
    }

    return foundNode;

  }

  insert(value, index) {
    let addedNode = new Node(value);
    //if the index exists in the list
    if(this.getAt(index) !== false) {
      let insertAt = this.getAt(index);
      //if we are not inserting at the head
      if(index > 0) {
        //if we are not inserting at the end
        if(index <= this._indices) {
          //new node's previous is the prev of whatever was already in the position
          addedNode.prev = insertAt.prev;
          //new node's next is whatever was already in the position
          addedNode.next = insertAt;
          //the previous position's next must point to the new node
          insertAt.prev.next = addedNode;
          //the moved position's prev must point to the new node
          insertAt.prev = addedNode;
          this._indices++;
        } else {
          //if we are inserting at the end we simply call add
          this.add(value);
        }
      } else {
        //if we are inserting at the head
        //make the new head's prev point to tail
        addedNode.prev = this.tail;
        //make the new head's next point to current head
        addedNode.next = this.head;
        //make the old head's prev point to the added node
        this.head.prev = addedNode;
        //make the old tail's next point to the added node
        this.tail.next = addedNode;
        //make the head be our new node
        this.head = addedNode;
        this._indices++;
      }
    } else {
      //if the index doesn't exist
      return false;
    }
  }

  toString() {
    //custom toString, describes all items in the list
    let str = "";
    for(let i = 0; i <= this._indices; i++) {
      str += this.getAt(i).customToString() + '\n';
    }
    return str;
  }
}
