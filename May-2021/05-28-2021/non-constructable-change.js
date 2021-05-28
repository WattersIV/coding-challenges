function nonConstructibleChange(coins) {
	//sort array 
	//loop through array checking if change value can be made with all the prev numbers
	//each iteration check if all value is greater than change + 1
	//if its not that means we already know it can be made and everything inbetween change + new number
	//add it to the change and keep going
	//If lower then there is a gap at change + 1
	
	coins.sort((a, b) => a - b)
	let change = 0
	for (const coin of coins) {
		if (coin > change + 1) return change + 1
		change += coin
	}
	return change + 1
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
