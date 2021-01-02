export function longestPeak(array: number[]) {
	// at least 3 integers total 
	//strictly increasing Then become strictly decreasing
	//to start there must be increasing numbers 
	//Then there must be a smaller num 
	//Stop when there is a larger num
	//O(N) time O(1) space
	
	let maxPeakLength = 0
	let peakLength = 1
	//mode can be rising or falling to look for asceding or descending numbers
	let mode = 'rising' 
	

	for (let i = 1; i < array.length; i++) {
	//rising and next number fits pattern
		if (mode === 'rising' && array[i] > array[i - 1]) {
			console.log('1', array[i])
			peakLength++
		} 
		//Rising pattern exists and next number is smaller 
		else if (mode === 'rising' && peakLength > 1 && array[i] < array[i - 1]) {
			console.log('2', array[i])
			peakLength++
			mode = 'descending'
		}
		//If mode is descending and the next num is smaller
		else if (mode === 'descending' && array[i] < array[i - 1]) {
			console.log('3', array[i])
			peakLength++
		}
		//if mode is desecding and the next is bigger compare with the longest peak and restart run
		else if (mode === 'descending' && array[i] > array[i - 1]) {
			console.log('4', array[i], 'count', peakLength)
			if (peakLength > maxPeakLength) {
				maxPeakLength = peakLength
			}
			peakLength = 2
			mode = 'rising'
		} //If the next is equal restart 
		else {
			console.log('else', array[i])
			if (mode === 'descending') {
				if (peakLength > maxPeakLength) {
					maxPeakLength = peakLength
				}
			}
			peakLength = 1
			mode = 'rising'
		}
 	}
	//if new peak didnt start check if current peak was bigger than max 
	if ( peakLength > maxPeakLength && mode === 'descending') {
		return peakLength
	} else {
		return maxPeakLength
	}
}
