export function numberOfWaysToMakeChange(n: number, denoms: number[]) {
	//make an array of size n 
	//Iterate trough this array once for every denom  
	//at each index check if the index is less or equal than the denom 
	//if it is less or equal than add the value of the num at the index minus the denom 
	//this way everytime another copy of the demon can be used it will be added 
	
	const waysToMakeChange = new Array(n + 1).fill(0)
	waysToMakeChange[0] = 1 
	
	for (let denom of denoms) {
		for (let index = 1; index < n + 1; index++) {
			if (denom <= index) {
				waysToMakeChange[index] += waysToMakeChange[index - denom]
			}
		}
	}

  return waysToMakeChange[n];
}
