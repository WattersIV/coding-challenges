function insertionSort(array) {
	//keep track of sorted arr 
	//at idx sorted arr check if that is greater than what comes before it and keep swaping till its in place
	for (let next = 1; next < array.length; next++) {
		let idx = next
		while (idx > 0 && array[idx] < array[idx - 1]) {
			swap(idx, idx - 1, array)
			idx--
		}
	}
	return array
}

function swap (i, j, arr) {
	const temp = arr[i]
	arr[i] = arr[j]
	arr[j] = temp
}

// Do not edit the line below.
exports.insertionSort = insertionSort;
