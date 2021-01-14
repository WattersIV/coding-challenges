let currentSize = 0
export function riverSizes(matrix: number[][]) {
//Loop through the whole matrix and when a 1 is hit use recursion to keep checking up,down,left,right 
//Going to need keep track of visited nodes in a cpy of the matrix so everytime a new 1 is found 
//we know if its part of another river
//O(n) time O(n) space 
	const outputArr: number[] = []
	const visitedNode: boolean[][] = matrix.map(row => row.map(location => false))
	for (let row = 0; row < matrix.length; row++) {
		for (let column = 0; column < matrix[row].length; column++) {
			if (matrix[row][column] === 1) {
				if (!visitedNode[row][column]) {
					currentSize = 0
					checkRiverSize(row, column, matrix, visitedNode)
					console.log('going into the arr', currentSize)
					outputArr.push(currentSize)
				}
			}
		}
	}
  return outputArr;
}

const checkRiverSize = (row: number, column: number, matrix: number[][], visitedNode: boolean[][]) => {
	console.log(currentSize)
	//Check if its a 1
	if (matrix[row][column] === 0 || visitedNode[row][column] === true) return
	visitedNode[row][column] = true
	currentSize++
	//check x axis 
	if (column < matrix[row].length - 1){
		checkRiverSize(row, column + 1, matrix, visitedNode)
	}
	if (column > 0) {
		checkRiverSize(row, column - 1, matrix, visitedNode)
	}		
	
	//check y axis
	if (row < matrix.length - 1) {
		checkRiverSize(row + 1, column, matrix, visitedNode)
	}
	if (row > 0) {
		checkRiverSize(row - 1, column, matrix, visitedNode)
	}
	return 
} 