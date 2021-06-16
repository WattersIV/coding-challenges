function smallestDifference(arrayOne, arrayTwo) {
  //Sort based on abs number 
	//Start with the idx at 0 on both and inc which ever is lowest 
	let idxOne = 0 
	let idxTwo = 0
	arrayOne.sort((a, b) => Math.abs(a) - Math.abs(b))
	arrayTwo.sort((a, b) => Math.abs(a) - Math.abs(b))
	let smallest = Infinity
	let output;
	console.log(arrayOne, arrayTwo)
	while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
		let sum = Math.abs(arrayOne[idxOne] - arrayTwo[idxTwo])
		if (sum === 0) return  [arrayOne[idxOne], arrayTwo[idxTwo]]
		console.log(sum, [arrayOne[idxOne], arrayTwo[idxTwo]])
		if (sum < smallest) {
			smallest = sum
			output = [arrayOne[idxOne], arrayTwo[idxTwo]]
		}
		Math.abs(arrayOne[idxOne]) > Math.abs(arrayTwo[idxTwo]) ? idxTwo++ : idxOne++
	}
	return output
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
