function isMonotonic(array) {
  //Check firs two for increase or decrease then see if the pattern continues throughout 
	//Check needs to be a while loop in case its even 
	const isIncreasing = checkArrayDirection(array)
	for (let i = 0; i < array.length - 1; i++) {
		if (isIncreasing) {
			if (array[i] > array[i + 1]) return false
		} else {
			if (array[i] < array[i + 1]) return false
		}
	}
	return true
}

const checkArrayDirection = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] < arr[i + 1]) return true
		if (arr[i] > arr[i + 1]) return false
	}
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
