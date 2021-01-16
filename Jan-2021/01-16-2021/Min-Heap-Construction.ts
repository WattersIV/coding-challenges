// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
export class MinHeap {
  heap: number[];

  constructor(array: number[]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[]) {
		//O(n) time O(1) space
		//get parent of last node and sift down 
		//Decrement the index to sift down at every level starting at the lowest possible levels 
		//This causes the base parent children relationship to be sorted and allowing the algorithm to go to higher 
		//levels and sort there too
    const deepestParent = Math.floor((array.length - 2) / 2)
		for (let i = deepestParent; i > -1; i--) {
			this.siftDown(i, array.length - 1, array)
		}
		return array;
  }

  siftDown(index: number, lastIndex: number, heap: number[]) {
		//O(log(n)) time O(1) space
    //child 1 (2 * i + 1) child 2 (2 * i + 2)
		//parent floor((i - 1) / 2)
		//Keep swaping with the lowest of the 2 children 
		//stop conditions are when the child index is outside of the arr len or 
		//when the number is less than both children
		let child1 = 2 * index + 1
		while (child1 <= lastIndex) {
			const child2 = 2 * index + 2 <= lastIndex ? 2 * index + 2 : -1
			let smallest
			if (child2 !== -1 && heap[child2] < heap[child1]) {
				smallest = child2 
			} else {
				smallest = child1
			} 
			
			if (heap[index] > heap[smallest]) {
				this.swap(index, smallest, heap)
				index = smallest
				child1 = 2 * index + 1 			
			} else {
				return 
			}
		}	
  }

  siftUp(index: number, heap: number[]) {
		//O(log(n)) time O(1) space
    //child 1 (2 * i + 1) child 2 (2 * i + 2)
		//parent floor((i - 1) / 2)
		//Keep swaping while the value is lower than parent
		let parentIndex = Math.floor((index - 1) / 2)
		while (index > 0 && heap[index] < heap[parentIndex]) {
			this.swap(index, parentIndex, heap)
			index = parentIndex 
			parentIndex = Math.floor((index - 1) / 2)
		}
  }

  peek() {
		//O(1) time O(1) space
	//return first element
    return this.heap[0];
  }

  remove() {
		//O(log(n)) time O(1) space
    //swap first and last element 
		//get rid of last element 
		//call sift down on the new top and the function will reconfigure itself properly

		this.swap(0, this.heap.length - 1, this.heap)
		const removed = this.heap.pop()
		this.siftDown(0, this.heap.length - 1, this.heap)
    return removed;
  }

  insert(value: number) {
		//O(log(n)) time O(1) space
    //Place the element at end of arr and sift up
		this.heap.push(value) 
		this.siftUp(this.heap.length - 1, this.heap)
  }
	
	swap(first: number, second: number, heap: number[]) {
		[heap[first], heap[second]] = [heap[second], heap[first]]
	}
}
