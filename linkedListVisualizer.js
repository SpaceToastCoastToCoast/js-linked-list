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
    nodeValue.value += '(' + list.getLength() + ')';
  };

  addNodeButton.addEventListener('click', vis.addNode);

  vis.updateDisplay = function() {
    listDiv.innerHTML = "";
    for(let i = 0; i < list.getLength(); i++) {
      let nodeDiv = document.createElement('div');
      nodeDiv.innerHTML = list.get(i).value;
      nodeDiv.className = 'nodeListEntry';
      nodeDiv.style.padding = "2px";
      nodeDiv.style.color = "#c00000";
      nodeDiv.style.backgroundColor = 'rgb(' + i * 20 + ', ' + i * 10 +', ' + i * 10 +')';
      listDiv.appendChild(nodeDiv);
    }
  };

  return vis;
};

linkedListVisualizer();