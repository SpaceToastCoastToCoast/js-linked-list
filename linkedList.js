/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  module = {};

  linkedListData = {};

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
      console.log(module.get(index - 1));
      module.get(index - 1).next = module.get(index).next;
      console.log(module.get(index - 1));
    }
    indices--;
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

  };

  return module;
}