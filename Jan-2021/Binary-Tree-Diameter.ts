// This is an input class. Do not edit.

export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

//O(n) time O(d) space 
export function binaryTreeDiameter(tree: BinaryTree) {
  return getTreeInfo(tree).diameter;
}

function getTreeInfo(tree: BinaryTree | null): TreeInfo  {
	if (tree === null) {
		return new TreeInfo(0, 0);
	} 
	
	const leftTreeInfo = getTreeInfo(tree.left);
	const rightTreeInfo = getTreeInfo(tree.right);
	
	const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height;
  const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
  //comparing max diamter of subtrees and current subtree
  const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
  //Incrementing height one as we go to the next node up
	const currentHeight = 1 + Math.max(leftTreeInfo.height + rightTreeInfo.height);
	
	return new TreeInfo(currentDiameter, currentHeight)
}

class TreeInfo {
	diameter: number;
	height: number;
	
	constructor(diameter: number, height: number) {
		this.diameter = diameter; 
		this.height = height;
	}
}