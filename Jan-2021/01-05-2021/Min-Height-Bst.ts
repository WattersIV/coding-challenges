export function minHeightBst(array: number[]) {
	//find the middle int and make it the value 
	//Build the left and right side by sending the array with a min and max constrained by the prev index 
	// O(n) time O(n) space
	
	return makeMinHeightBst(array, 0, array.length - 1)
} 

const makeMinHeightBst = (arr: number[], start: number, end: number) => {
	//when theres no more numbers make sibiling null
	if (start > end) return null
	const middle = Math.round((end + start) / 2) 
	const value = arr[middle]
	console.log(arr, 'middle', middle, 'val', value)
	const node = new BST(value) 
	//The left and right children will be the middle of whats left/right of this value in the array
	node.left = (makeMinHeightBst(arr, start, middle - 1))
	node.right = (makeMinHeightBst(arr, middle + 1, end))
	return node
}

export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}
