//Start a DFS recursive function to add the depth of each node to the total depth variable in the global scope 
//Send the depth in the function to remeber the starting point 
//Increment the depth every time it goes to the left or right node 

let totalDepth: number = 0
export function nodeDepths(root: BinaryTree) {
  totalDepth = 0
  searchTree(root, 0)
  return totalDepth
}

const searchTree = (current: BinaryTree | null, depth: number) => {
  if (!current) {
    return
  } 
  
  totalDepth += depth
  
  if (!current.left && !current.right) {
    return
  }

  searchTree(current.left, depth + 1) 
  searchTree(current.right, depth + 1)
}

// This is the class of the input binary tree.
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

//O(n) It searches every node and doesnt repeat any