const linkedListVisualizer = function() {
  let vis = {};

  let list = new LinkedList();

  let nodeValue = document.getElementById('nodeValue');
  let controlsDiv = document.getElementById('controls');
  let listDiv = document.getElementById('list');

  let addNodeButton = document.createElement('button');
  addNodeButton.id = 'addNodeButton';
  addNodeButton.innerHTML = 'Add Node';
  controlsDiv.appendChild(addNodeButton);

  let removeDiv = document.createElement('div');
  let removeButton = document.createElement('button');
  removeButton.innerHTML = "Remove Node: ";
  let removeNode = document.createElement('select');
  removeNode.id = 'removeNode';
  removeNode.name = 'Remove Node';
  removeDiv.appendChild(removeButton);
  removeDiv.appendChild(removeNode);
  controlsDiv.appendChild(removeDiv);

  let insertDiv = document.createElement('div');
  let insertButton = document.createElement('button');
  insertButton.innerHTML = "Insert Node At: ";
  let insertNode = document.createElement('select');
  insertNode.id = 'insertNode';
  insertNode.name = 'Insert Node';
  insertDiv.appendChild(insertButton);
  insertDiv.appendChild(insertNode);
  controlsDiv.appendChild(insertDiv);

  vis.addNode = function() {
    list.add(nodeValue.value);
    vis.updateDisplay();
    nodeValue.value = 'Specify node value here';
  };

  addNodeButton.addEventListener('click', vis.addNode);

  vis.removeAt = function() {
    if(removeNode.options[removeNode.selectedIndex] !== undefined) {
      let removeIndex = parseInt(removeNode.options[removeNode.selectedIndex].value);
      list.remove(removeIndex);
    }
    vis.updateDisplay();
  };

  removeButton.addEventListener('click', vis.removeAt);

  vis.insertAt = function() {
    if(insertNode.options[insertNode.selectedIndex] !== undefined) {
      let insertIndex = parseInt(insertNode.options[insertNode.selectedIndex].value);
      list.insert(nodeValue.value, insertIndex);
    }
    vis.updateDisplay();
  };

  insertButton.addEventListener('click', vis.insertAt);

  vis.updateDisplay = function() {
    listDiv.innerHTML = "";

    //re-initialize our drop-down lists
    removeNode.innerHTML = "";
    insertNode.innerHTML = "";

    //update our list display and our dropdowns to reflect new state

    for(let i = 0; i < list.length; i++) {
      let nodeDiv = document.createElement('div');
      nodeDiv.innerHTML = list.getAt(i).customToString();
      nodeDiv.className = 'nodeListEntry';
      nodeDiv.style.padding = "2px";
      nodeDiv.style.color = "#c00000";
      nodeDiv.style.backgroundColor = 'rgb(' + i * 20 + ', ' + i * 10 +', ' + i * 10 +')';
      listDiv.appendChild(nodeDiv);

      let removeOption = document.createElement('option');
      removeOption.value = i;
      removeOption.text = i;
      removeNode.appendChild(removeOption);
      let insertOption = document.createElement('option');
      insertOption.value = i;
      insertOption.text = i;
      insertNode.appendChild(insertOption);
    }
  };

  return vis;
};

linkedListVisualizer();