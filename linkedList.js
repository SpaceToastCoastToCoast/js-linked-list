/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
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

  //adds a value to the end of a list
  module.add = function(value) {
    let addedNode = {
      value: value,
      next: null
    };

    if(head === null) {
      head = addedNode;
    } else {
      indices++;
    }

    if(tail !== null) {
      tail.next = addedNode;
    }

    tail = addedNode;

    return addedNode;
  };

  module.remove = function(index) {
    if(module.get(index) !== false) {
      if(index > 0) {
        module.get(index - 1).next = module.get(index).next;
      } else {
        head = head.next;
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

    if(node !== null) {
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
      value: value,
      next: null
    };
    if(module.get(index) !== false) {
      if(index > 0) {
        addedNode.next = module.get(index);
        module.get(index - 1).next = addedNode;
      } else {
        addedNode.next = head;
        head = addedNode;
      }
      indices++;
    } else {
      return false;
    }
  };

  return module;
}