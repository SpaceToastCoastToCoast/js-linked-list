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

    if(head === null) {
      head = addedNode;
    } else {
      indices++;
    }
    addedNode.prev = module.get(indices);

    if(tail !== null) {
      tail.next = addedNode;
    }

    tail = addedNode;
    tail.next = module.get(0);

    return addedNode;
  };

  module.remove = function(index) {
    if(module.get(index) !== false) {
      if(index > 0) {
        module.get(index - 1).next = module.get(index).next;
        if(index < indices) {
          module.get(index + 1).prev = module.get(index).prev;
        } else {
          module.get(index - 1).next = null;
        }
      } else {
        head = head.next;
        head.prev = module.get(indices - 1);
      }
      tail = module.get(indices - 1);
      indices--;
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
      if(index > 0) {
        if(index <= indices) {
          addedNode.prev = module.get(index).prev;
          addedNode.next = module.get(index);
          module.get(index - 1).next = addedNode;
        } else {
          module.add(value);
        }
      } else {
        addedNode.prev = null;
        addedNode.next = head;
        head = addedNode;
      }
      indices++;
    } else {
      return false;
    }
  };

  return module;
};