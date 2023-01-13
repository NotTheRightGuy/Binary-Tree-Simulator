let binaryTree = new BinaryTree();
let buttonValue = document.getElementById('value');

// Setup the canvas
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
}

// Draw the tree in the canvas
function draw() {
  // Draw the tree
  windowResized();
  background(255);
  if (binaryTree.root !== null) {
    binaryTree.drawTree();
  }
}

// resize canvas when window is resized without clearing the canvas
function windowResized() {
  return resizeCanvas(windowWidth, windowHeight);
}

// Add a node to the tree calling the insert method
function insertNode() {
  let value = buttonValue.value;
  binaryTree.insert(parseInt(value));
  binaryTree.drawTree();
  buttonValue.value = '';
}

// Delete a node from the tree calling the delete method
function deleteNode() {
  let value = buttonValue.value;
  binaryTree.delete(parseInt(value));
  binaryTree.drawTree();
  buttonValue.value = '';
}

// Search a node in the tree calling the search method
function searchNode() {
  let value = buttonValue.value;
  binaryTree.search(parseInt(value));
  binaryTree.drawTree();
  buttonValue.value = '';
}

// Delete all nodes from the tree
function clearTree() {
  binaryTree = new BinaryTree();
  background(255);
}