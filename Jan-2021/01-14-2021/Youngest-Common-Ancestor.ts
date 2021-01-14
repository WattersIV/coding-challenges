// This is an input class. Do not edit.
class AncestralTree {
  name: string;
  ancestor: AncestralTree | null;

  constructor(name: string) {
    this.name = name;
    this.ancestor = null;
  }
}

export function getYoungestCommonAncestor(
  topAncestor: AncestralTree,
  descendantOne: AncestralTree,
  descendantTwo: AncestralTree,
) {
  //Find depth of descendants and bring the lower one up until even 
	//then if they are not at the same ancsetor already increment them up together 
	//O(d) time O(1)space
	const depth1 = getDepths(topAncestor, descendantOne)
	const depth2 = getDepths(topAncestor, descendantTwo)
	console.log(descendantTwo.name)
	if (depth1 !== depth2) {
		depth1 > depth2 ? descendantOne = reachEqualDepth(descendantOne, depth1, depth2) : descendantTwo = reachEqualDepth(descendantTwo, depth2, depth1)
	}
	console.log(descendantTwo.name)
	while (descendantOne !== descendantTwo) {
		descendantOne.ancestor === null ? topAncestor : descendantOne = descendantOne.ancestor
		descendantTwo.ancestor === null ? topAncestor : descendantTwo = descendantTwo.ancestor
	}
	return descendantOne
}

const getDepths = (topAncestor: AncestralTree , descendant: AncestralTree) => {
	let depth = 0
	let current = descendant
	while (current !== topAncestor) {
		current = current.ancestor!
		depth++
	}
	return depth
} 

const reachEqualDepth = (node: AncestralTree, currentDepth: number, targetDepth: number) => {
	let current = node
	while (currentDepth > targetDepth) {
		current = current.ancestor!
		currentDepth--
	}
	return current
}