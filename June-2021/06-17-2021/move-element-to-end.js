function moveElementToEnd(array, toMove) {
  //keep and end ptr and go left if the current idc is the toMove 
	//Loop through the array and swap toMove occurances with the right idx
	let endIdx = array.length - 1
	for (let i = 0; i < endIdx; i++) {
		while (array[endIdx] === toMove) {
			endIdx--
		}
		if (i >= endIdx) return array
		if (array[i] === toMove) {
			swap(i, endIdx, array)
		}
	}
	return array
}

const swap = (i, j, array) => {
	const tmp = array[i]
	array[i] = array[j]
	array[j] = tmp
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
