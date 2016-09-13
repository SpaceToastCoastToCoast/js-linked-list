const linkedListVisualizer = function() {
  let vis = {};
  let list = linkedListGenerator();
  let addNodeButton = document.createElement('button');
  addNodeButton.innerHTML = "Add Node";
  document.body.insertBefore(addNodeButton);

  vis.updateDisplay = function() {
    for(let i = 0; i < list.getLength(); i++) {
      let nodeDiv = document.createElement('div');
      let nodeContent = document.createTextNode(list.get(i).value);
      nodeDiv.appendChild(nodeContent);
      document.body.insertBefore(nodeDiv);
    }
  };

};

linkedListVisualizer();