const stackChallenge = function() {
  let stack = {};
  let list = linkedListGenerator();
  let listDiv = document.getElementById('list');
  let textArea = document.getElementById('textBox');
  let dumpButton = document.getElementById('dumpButton');
  let saveButton = document.getElementById('saveButton');

  stack.saveNode = function() {
    list.add(textArea.value);
    textArea.value = 'Added node. Specify next node';
  };

  saveButton.addEventListener('click', stack.saveNode);

  stack.updateDisplay = function() {
    listDiv.innerHTML = "";

    //update our list display and our dropdowns to reflect new state
    for(let i = 0; i < list.getLength(); i++) {

    }
  };

  return stack;

};

stackChallenge();