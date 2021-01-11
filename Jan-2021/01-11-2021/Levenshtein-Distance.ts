export function levenshteinDistance(str1: string, str2: string) {
	//create a 2d array comparing the arrays on each axis 
	//Inisde this array we will keep track of the amount of changes needed at at each index
	//If the lettters at the position are equal keep the prev number 
	//If not equal than take the smallest num in any of the 3 lines: diagonal, vertical, horizontal 
	//The the value at the last index of the column and row will be the lowest amount of edits
	const numOfEdits: number[][] = []
	for (let i = 0; i < str2.length + 1; i++) { 
		const row: number[] = []
		for (let j = 0; j < str1.length + 1; j++) {
			row.push(j)
		}
		row[0] = i
		numOfEdits.push(row)
	}
	for (let i = 1; i < str2.length + 1; i++) { 
		for (let j = 1; j < str1.length + 1; j++) {
			if (str2[i - 1] === str1[j - 1]) {
				numOfEdits[i][j] = numOfEdits[i - 1][j - 1]
			} else {
				numOfEdits[i][j] = 1 + Math.min(numOfEdits[i - 1][j - 1], numOfEdits[i][j - 1], numOfEdits[i - 1][j])
			}
		}
	}
  return numOfEdits[str2.length][str1.length];
}
