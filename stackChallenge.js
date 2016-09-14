const stackChallenge = function() {
  let stack = {};
  let list = linkedListGenerator();
  let listDiv = document.getElementById('list');
  let textArea = document.getElementById('textBox');
  let infoBox = document.getElementById('infoBox');
  let dumpButton = document.getElementById('dumpButton');
  let saveButton = document.getElementById('saveButton');

  stack.saveNode = function() {
    list.add(textArea.value);
    textArea.value = '';
    infoBox.innerHTML = 'Added node. Specify next node';
  };

  saveButton.addEventListener('click', stack.saveNode);

  stack.listItemToString = function(index) {
    if(list.get(index) !== false) {
      result = "Value: " + list.get(index).value +
      "<br />Next item: " + list.get(index).next.value;

      return result;
    }
  };

  stack.dump = function() {
    //clear our list each time we initialize dump
    listDiv.innerHTML = "";

    //dump our list to the page from tail to head
    for(let i = list.getLength() - 1; i >= 0; i--) {
      listDiv.innerHTML += "<p>" + stack.listItemToString(i) + "</p>";
    }

    infoBox.innerHTML = 'Stack dumped, most recent node at top';
  };

  dumpButton.addEventListener('click', stack.dump);

  return stack;

};

stackChallenge();