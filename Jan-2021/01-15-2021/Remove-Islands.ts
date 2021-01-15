
export function removeIslands(matrix: number[][]) {
  //Search through the edges of the matrix and when a 1 is found we can search through it changing nodes to 2 
	//Loop through the matrix and if a 1 is found it needs to be 0 2's need to be 1
	//O(wh) time O(wh)space
	
	//Go right across top level
	for (let i = 0; i < matrix[0].length; i++) {
		if (matrix[0][i] === 1) changeNonIsland(0, i, matrix)
	}
	
	//Go down along the right side 
	for (let i = 0; i < matrix.length; i++) {
		if (matrix[i][matrix[i].length - 1] === 1) changeNonIsland(i, matrix[i].length - 1, matrix)
	}
	
	//Go left across the bottom row 
	for (let i = matrix[matrix.length - 1].length; i > - 1; i--) {
		if (matrix[matrix.length - 1][i] === 1) changeNonIsland(matrix.length - 1, i, matrix)
	}
	
	//Go up along left side 
	for (let i = matrix.length - 1 ; i > -1; i--) {
		if (matrix[i][0] === 1) changeNonIsland(i, 0, matrix)
	}
	
	return transformMatrix(matrix)
}

const changeNonIsland = (row: number, column: number, matrix: number[][]) => {
	matrix[row][column] = 2
	if (row + 1 < matrix.length && matrix[row + 1][column] === 1) changeNonIsland(row + 1, column, matrix) //Up
	if (row - 1 > -1 && matrix[row - 1][column] === 1) changeNonIsland(row - 1, column, matrix) //Down
	if (column + 1 < matrix[row].length && matrix[row][column + 1] === 1) changeNonIsland(row, column + 1, matrix) //Right
	if (column - 1 > -1 && matrix[row][column - 1] === 1) changeNonIsland(row, column - 1, matrix) //Left
	return 
} 

const transformMatrix = (matrix: number[][]) => {
	for (let row = 0; row < matrix.length; row++) {
		for (let column = 0; column < matrix[row].length; column++) {
			if (matrix[row][column] > 0) matrix[row][column]-- 
		}
	}
	return matrix
}