const linkedListVisualizer = function() {
  let vis = {};
  let list = linkedListGenerator();

  let nodeValue = document.getElementById('nodeValue');
  let controlsDiv = document.getElementById('controls');
  let listDiv = document.getElementById('list');

  let addNodeButton = document.createElement('button');
  addNodeButton.id = 'addNodeButton';
  addNodeButton.innerHTML = 'Add Node';
  controlsDiv.appendChild(addNodeButton);

  vis.addNode = function() {
    list.add(nodeValue.value);
    console.log(list.getTail());
    vis.updateDisplay();
  };

  addNodeButton.addEventListener('click', vis.addNode);

  vis.updateDisplay = function() {
    listDiv.innerHTML = "";
    for(let i = 0; i < list.getLength(); i++) {
      let nodeDiv = document.createElement('div');
      let nodeContent = document.createTextNode(list.get(i).value);
      nodeDiv.appendChild(nodeContent);
      listDiv.appendChild(nodeDiv);
    }
  };

  return vis;
};

linkedListVisualizer();