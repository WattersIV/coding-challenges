type Range = [number, number];

export function searchInSortedMatrix(matrix: number[][], target: number): Range {
  // Keep reading across untill a num is = or bigger than target 
	// If a value is bigger than the target the rest of the row and each column associated can me eliminated 
	//O(n + m) time O(1) space
	let maxDepth = matrix.length
	let maxWidth = matrix[0].length
	for (let row = 0; row < maxDepth; row++) {
		for (let column = 0; column < maxWidth; column++) {
			if (matrix[row][column] === target) return [row, column]
			if (matrix[row][column] > target) {
				maxWidth = column
			}
		}
	}
	
  return [-1, -1];
}
