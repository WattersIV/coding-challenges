// This is an input class. Do not edit.
export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

//O(height) time O(1) space
export function findSuccessor(tree: BinaryTree, node: BinaryTree) {
//We have access to the whole node not just the val so if it has a right tree get leftmost in right tree
//Otherwise we have to find a node that is not a right child of its parent and return that
//If no right tree then go to the next anscestor to be checked 
//We know that a node has been checked if its right sibiling 
//-- in this case go up until the current is not a right silbing
	if (node.right !== null) {
		return getLeftmostNode(node.right)
	} 
	
	return getRightMostParent(node)
} 

const getLeftmostNode = (tree: BinaryTree) => {
	let current = tree
	while (current.left !== null) {
		current = current.left
	} 
	return current
}

const getRightMostParent = (tree: BinaryTree) => {
	let current = tree 
	while (current.parent !== null && current.parent.right === current)  {
		current = current.parent
	}
	return current.parent
}
