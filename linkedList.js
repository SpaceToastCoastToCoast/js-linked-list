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
    }

    tail = addedNode;

    return addedNode;
  };

  module.remove = function(index) {

  };

  module.get = function(index) {

  };

  module.insert = function(value, index) {

  };

  return module;
}