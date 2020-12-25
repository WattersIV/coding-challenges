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

export function findClosestValueInBst(tree: BST | null, target: number) {
  return searchTree(tree, target);
}

const searchTree = (tree: BST | null, target: number) => {
  let current = tree
  //Not null assertion operator 
  let closest: number = tree!.value
  while (current !== null) {
    //if current closer to target make current closest
    if (Math.abs(target - closest) > Math.abs(target - current.value)) {
      closest = current.value
    }
    target > current.value ? current = current.right : current = current.left  
  }
  return closest
}
