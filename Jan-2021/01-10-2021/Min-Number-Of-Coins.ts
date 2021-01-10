export function minNumberOfCoinsForChange(n: number, denoms: number[]) {
  //make an array of len n + 1 
	//loop through this array every denom and if the index is less than = to denom then we can update the num
	const target = new Array(n + 1).fill(Infinity) 
	target[0] = 0 
	
	for (const denom of denoms) {
		for (let index = 0; index < target.length; index++) {
			if (index >= denom) {
				//The current index is equal to whatever is smaller the current min at that index or the adding 1 to the  index of index - denom
				target[index] = Math.min(target[index], target[index - denom] + 1)  
			}
		}
	}
	//If target is not infinity return the value else return -1
  return target[n] !== Infinity ? target[n] : -1
}

//O(nd) time O(n) space