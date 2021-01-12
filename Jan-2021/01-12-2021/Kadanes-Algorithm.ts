export function kadanesAlgorithm(array: number[]) {
	//Keep a counter of the max substring and current counter
	//At every index check if the addition of that index is greater than it on its own
	//If the index is greatest on its own reset currentcounter check if max too 
  // return max 
  //O(n) time O(1) space
	let currentSubStringCount = array[0]
	let maxSubStringCount = array[0]
	
	for (let i = 1; i < array.length; i++) {
		if (array[i] > currentSubStringCount + array[i]) {
			currentSubStringCount = 0
		}
		currentSubStringCount += array[i]
		maxSubStringCount = Math.max(maxSubStringCount, currentSubStringCount)
	}
	return maxSubStringCount
}
