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
  
    depthFirstSearch(array) {
      //Queue node children in order and append to array at each 
          //Return if node is null
          array.push(this.name)
          if (array.length === 0) return array
          for (const child of this.children) {
              depthFirstSearchHelper(child, array)			
          }
          return array
    }
  }
  
  function depthFirstSearchHelper (node, array) {
      if (!node) return
      array.push(node.name)
      for (const child of node.children) {
          depthFirstSearchHelper(child, array)
      }
  }
  
  // Do not edit the line below.
  exports.Node = Node;
  