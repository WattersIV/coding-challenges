// This is an input class. Do not edit.
class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
//O(n) Time O(depth) time
export function validateBst(tree: BST) {
  //compare the current value witht the min and max value it can have 
	//If it is between the limit and a BST or null then keep searchings DFS 
	//If One of the conditions are broken then return fals
  return validateBstDispatch(tree, Infinity, -Infinity);
} 

const validateBstDispatch = (tree: BST | null, maxValue: number, minValue: number): boolean => {
	//base condition for reaching end of a branch
	if (tree === null) return true 
	//check if value doesn't match pattern
	if (tree.value < minValue || tree.value >= maxValue) return false 
	const leftSearch = validateBstDispatch(tree.left, tree.value, minValue) 
	return leftSearch && validateBstDispatch(tree.right, maxValue, tree.value)
}
