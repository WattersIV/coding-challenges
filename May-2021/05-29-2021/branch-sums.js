// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    //recursivly go deeper left then right and track the sum 
      //when there is no more to the left or right to search push to arr
      const sums = []
      calculateBranchSums(root, 0, sums)
      return sums
  }
  
  function calculateBranchSums(current, currentSum, sums) {
      if (!current) return
      const newSum = currentSum + current.value
      if (!current.left && !current.right ) sums.push(newSum)
      calculateBranchSums(current.left, newSum, sums)
      calculateBranchSums(current.right, newSum, sums)
  } 
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  