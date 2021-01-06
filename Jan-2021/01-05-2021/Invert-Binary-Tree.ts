class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) time O(d) space for depth
export function invertBinaryTree(tree: BinaryTree | null) {
  //dfs left then right  
	//base is when tree is null
	//swap the sibling trees
	if (tree === null) return 
		invertBinaryTree(tree.left)
		invertBinaryTree(tree.right)
		const rightSide = tree.right 
		tree.right = tree.left 
		tree.left = rightSide

	return tree
}
