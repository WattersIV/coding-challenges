export function maxSubsetSumNoAdjacent(array: number[]) {
  //Could loop through checking every possiblity but that would be O(n^2)
	//Loop through the array calculating the max sum up until the index 
	//Calculate it by either taking the highest between the max sum calc one before the index or
	//the sum of the max sum at two spots before the index plus the index 
	
	//O(n) time O(1) space
	if (!array.length) return 0 
	if (array.length === 1) return array[0]
	let maxAtIndexMinus2 = array[0]
	let maxAtIndexMinus1 = Math.max(array[0], array[1])
	
	for (let i = 2; i < array.length; i++) {
		const maxUsingCurrentIndex = maxAtIndexMinus2 + array[i]
		if (maxAtIndexMinus1 >= maxUsingCurrentIndex) {
			maxAtIndexMinus2 = maxAtIndexMinus1 
		} else {
			maxAtIndexMinus2 = maxAtIndexMinus1
			maxAtIndexMinus1 = maxUsingCurrentIndex
		}
	}
	return maxAtIndexMinus1
}
