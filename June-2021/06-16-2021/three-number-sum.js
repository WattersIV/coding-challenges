function threeNumberSum(array, targetSum) {
	let output = []
	array.sort((a, b) => a - b)
  for (let i = 0; i < array.length - 2; i++) {
		let right = array.length - 1
		let left = i + 1
		while (left < right ) {
			let sum = array[i] + array[left] + array[right]
			if (sum === targetSum) output.push([array[i], array[left], array[right]])
			sum < targetSum ? left++ : right--
		}
	}
	return output
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
