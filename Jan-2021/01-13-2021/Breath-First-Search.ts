// Do not edit the class below except
// for the breadthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
  name: string;
  children: Node[];

  constructor(name: string) {
    this.name = name;
    this.children = [];
  }

  addChild(name: string): Node {
    this.children.push(new Node(name));
    return this;
  }

	//O(v + e) time because of the while queue loop and the push children loop O(v) space
  breadthFirstSearch(array: string[]) {
		const queue: Node[] = [this]
		while (queue.length > 0) {
			const current = queue.shift()!
			array.push(current.name)
			 for (const child of current.children) {
				 queue.push(child)
			 }
		}
		return array
  }
}



