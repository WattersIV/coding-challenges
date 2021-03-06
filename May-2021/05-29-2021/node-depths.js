function nodeDepths(root, depth = 0) {
    //recursivley que up left and right and add one the the depth each time 
      if (!root) return 0
      return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  