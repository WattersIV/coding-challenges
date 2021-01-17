// This is an input class. Do not edit.
export class Node {
  value: number;
  prev: Node | null;
  next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node: Node) {
		//Only need to use this function to check if head is null 
		//O(1) time O(1) space
		if (this.head === null ) {
			this.head = node 
			this.tail = node 
			return
		} 
		this.insertBefore(this.head, node)
  }

  setTail(node: Node) {
    //Only checking if the list is empty 
		// O(1) time O(1) space
		if (this.tail === null) {
			this.setHead(node)
			return
		}
		this.insertAfter(this.tail, node)
  }

  insertBefore(node: Node, nodeToInsert: Node) {
		//O(1) time O(1) space
    //Cant insert node anywhere when there is only 1 node 
		if (nodeToInsert === this.head && nodeToInsert === this.tail) return 
		//Break the link where the node is
		this.remove(nodeToInsert)
		//Create the new link where new node goes 
		nodeToInsert.prev =  node.prev 
		nodeToInsert.next = node 
		//If there is no prev the node is the head 
		if (node.prev === null) {
			this.head = nodeToInsert
		} else {
			node.prev.next = nodeToInsert
		}
		node.prev = nodeToInsert
  }

  insertAfter(node: Node, nodeToInsert: Node) {
    //Same as before 
		if (nodeToInsert === this.head && nodeToInsert == this.tail) return 
		this.remove(nodeToInsert) 
		nodeToInsert.next = node.next 
		nodeToInsert.prev = node 
		if (node.next === null) {
			this.tail = nodeToInsert
		} else {
			node.next.prev = nodeToInsert
		} 
		node.next = nodeToInsert
  }

  insertAtPosition(position: number, nodeToInsert: Node) {
    //O(p) time O(1) space
		if (position === 1) {
			this.setHead(nodeToInsert)
			return
		} 
		let current = this.head 
		let index = 1
		//Getting the node after the index were looking for 
		while (current !== null && index++ !== position) current = current.next
		if (current !== null ) {
			this.insertBefore(current, nodeToInsert)
		} else {
			this.setTail(nodeToInsert)
		}
  }

  removeNodesWithValue(value: number) {
    //O(n) time O(1) space
		let current = this.head 
		while (current !== null) {
			const nodeToCheck = current
			current = current.next
			if (nodeToCheck.value === value) this.remove(nodeToCheck)
		}
  }

  remove(node: Node) {
    //O(1) time O(1) space
		if (node === this.head) this.head = node.next
		if (node === this.tail) this.tail = node.prev
		if (node.prev !== null) node.prev.next = node.next 
		if (node.next !== null) node.next.prev = node.prev 
		node.prev = null 
		node.next = null
		
  }

  containsNodeWithValue(value: number) {
    //O(n) time O(1) space
		let current = this.head 
		while (current !== null) {
			if (current.value === value) return true
			current = current.next
		}
		return false
  }
}
