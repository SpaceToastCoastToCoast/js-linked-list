/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  module = {};

  linkedList = {};

  module.getHead = function() {
    if(linkedList.data !== undefined) {
      return linkedList.data;
    }
    return null;
  };

  module.getTail = function() {

  };

  //adds a value to the end of a list
  module.add = function(value) {

  };

  module.remove = function(index) {

  };

  module.get = function(index) {

  };

  module.insert = function(value, index) {

  };

  return module;
}