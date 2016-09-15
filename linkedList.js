/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
const linkedListGenerator = function(){
  let module = {};

  let head = null;
  let tail = null;
  let indices = 0;

  module.getHead = function() {
    return head;
  };

  module.getTail = function() {
    return tail;
  };

  module.getLength = function() {
    if(head === null) {
      return 0;
    }
    return (indices + 1);
  };

  //adds a value to the end of a list
  module.add = function(value) {
    let addedNode = {
      prev: null,
      value: value,
      next: null
    };

    //if we have no head, make this new node the head
    if(head === null) {
      head = addedNode;
      //get the last entry and make it the previous of our added node
      head.prev = module.get(indices);
    } else {
      //get the last entry and make it the previous of our added node
      addedNode.prev = module.get(indices);
      //update the head's prev to point to our new node, which will be our new tail
      head.prev = addedNode;
      //if we already have a head, increment the number of entries
      indices++;
    }

    //if we already have a tail, update its next to point to the new node
    if(tail !== null) {
      tail.next = addedNode;
    }

    //make the new node be the tail, and set its next to point to the head
    tail = addedNode;
    tail.next = head;

    return addedNode;
  };

  module.remove = function(index) {
    if(module.get(index) !== false) {
      let toRemove = module.get(index);
      console.log(toRemove);
      //if we are not on the head
      if(index > 0) {
        //the node before toRemove's next should point to toRemove's next
        console.log(toRemove.prev);
        toRemove.prev.next = toRemove.next;
        if(index < indices) {
          //if we are not on the tail
          toRemove.next.prev = toRemove.prev;
        } else {
          //if we are on the tail
          tail = toRemove.prev;
          tail.next = head;
          head.prev = tail;
        }
      } else {
        //if we are on the head
        //the head is now whatever was after it
        head = head.next;
        //the new head's prev is the tail
        head.prev = tail;
        //the tail's next must be the head
        tail.next = head;
      }
      indices--;
      tail = module.get(indices);
    } else {
      return false;
    }

  };

  module.get = function(index) {
    let foundNode = false;
    let node = head;

    if(node !== null && index >= 0) {
      for(let i = 0; i <= indices; i++) {
        if(i === index) {
          foundNode = node;
          break;
        }
        if(node.next !== null){
          node = node.next;
        }
      }
    }

    return foundNode;
  };

  module.insert = function(value, index) {
    let addedNode = {
      prev: null,
      value: value,
      next: null
    };
    if(module.get(index) !== false) {
      let insertAt = module.get(index);
      if(index > 0) {
        if(index <= indices) {
          //new node's previous is the prev of whatever was already in the position
          addedNode.prev = insertAt.prev;
          //new node's next is whatever was already in the position
          addedNode.next = insertAt;
          //the previous position's next must point to the new node
          insertAt.prev.next = addedNode;
          //the moved position's prev must point to the new node
          insertAt.prev = addedNode;
          indices++;
        } else {
          module.add(value);
        }
      } else {
        //if we are inserting at the head
        //make the new head's prev point to tail
        addedNode.prev = tail;
        //make the new head's next point to current head
        addedNode.next = head;
        //make the old head's prev point to the added node
        head.prev = addedNode;
        //make the old tail's next point to the added node
        tail.next = addedNode;
        //make the head be our new node
        head = addedNode;
        indices++;
      }
    } else {
      return false;
    }
  };

  return module;
};