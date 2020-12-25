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



export function branchSums(root: BinaryTree): number[] {
  let sums: number[] = []
  searchTree(root, 0, sums)
  return sums
}

const searchTree = (current:BinaryTree | null, total: number, sums: number[]) => {
  //When there is no left/right node return to end recursion
  if (!current) {
    return
  }
  
  //recursively adding the sum of the whole branch
  total += current.value 
  
  //if there is no left or right - Leaf Node - Time to push the total into the array
  if (current.left === null && current.right === null) {
    sums.push(total)
    return
  }

  //Call the function again if there is a left or right node. If there is only one the other will be caught in first if statement
  searchTree(current.left, total, sums)
  searchTree(current.right, total, sums)
}


//O(n) searches depth first and doesnt repeat any nodes