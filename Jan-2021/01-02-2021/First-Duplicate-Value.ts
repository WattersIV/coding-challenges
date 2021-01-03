export function firstDuplicateValue(array: number[]) {
  //Loop through the input array 
	//Check if set exists with the value at that index if it does return that value
	//Otherwise add to the set with every value that comes up
	//O(n) time O(n) space
	const numbersSeen = new Set()
	
	for (const index of array) {
		if (numbersSeen.has(index)) {
			return index
		}
		numbersSeen.add(index)
	}
  return -1;
}
