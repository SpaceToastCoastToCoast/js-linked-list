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

  stack.dump = function() {
    //clear our list each time we initialize dump
    listDiv.innerHTML = "";

    //dump our list to the page from tail to head
    for(let i = list.getLength() - 1; i >= 0; i--) {
      listDiv.innerHTML += "<p>" + list.get(i) + "</p>";
    }
  };

  dumpButton.addEventListener('click', stack.dump);

  return stack;

};

stackChallenge();