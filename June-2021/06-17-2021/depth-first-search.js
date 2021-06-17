// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array, current = this) {
		array.push(current.name)
		for (const child of current.children) {
			this.depthFirstSearch(array, child)
		}
		return array
  }
}

// Do not edit the line below.
exports.Node = Node;
