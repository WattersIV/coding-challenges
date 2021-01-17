// This is an input class. Do not edit.
class LinkedList {
  value: number;
  next: LinkedList | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export function removeKthNodeFromEnd(head: LinkedList, k: number) {
	//Get 2 pointers k nodes apart and when the right one is at the end the node is on the left pointer 
	//Fix the LL and remove the node 
	//If the node to remove is the head then take the val of the next node
	// O(n) time O(1) space
	let right: LinkedList | null = head 
	let left: LinkedList = head
	let counter = 1
	while (counter <= k) {
		right = right!.next 
		counter++
	}
	//If k is the len of the list then we have to 
	if (right === null) {
		head.value = head.next!.value 
		head.next = head.next!.next
		return 
	}
	
	while (right.next !== null) {
		left = left.next!
		right = right.next
	}
	left.next = left.next!.next 
}
