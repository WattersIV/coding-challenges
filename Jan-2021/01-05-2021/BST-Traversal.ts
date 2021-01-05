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

//All 3 have O(n) time O(d) space d for depth

export function inOrderTraverse(tree: BST | null, array: number[]) {
  //Recursively call left node until there are no more lefts.
	//Add value to array 
	//Recursively call everything to the right
	
	if (tree !== null) {
		inOrderTraverse(tree.left, array)  
		array.push(tree.value)
		inOrderTraverse(tree.right, array) 
	}
  return array;
}

export function preOrderTraverse(tree: BST | null, array: number[]) {
  //Add value then recursivley call left then right
	if (tree !== null) {
		array.push(tree.value)
		preOrderTraverse(tree.left, array)
		preOrderTraverse(tree.right, array)
	}
  return array;
}

export function postOrderTraverse(tree: BST | null, array: number[]) {
  //Recursivley call left then right then add value once theres no left or right 
	if (tree !== null) {
		postOrderTraverse(tree.left, array)
		postOrderTraverse(tree.right, array)
		array.push(tree.value)
	}
  return array;
}
