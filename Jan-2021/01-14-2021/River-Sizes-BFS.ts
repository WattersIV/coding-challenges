export function riverSizes(matrix: number[][]) {
  //BFS O(n) time O(n) space 
	const nodesSeen: boolean[][] = matrix.map(row => row.map(val => false))
	const outputArr: number[] = []
	for (let row = 0; row < matrix.length; row++) {
		for (let column = 0; column < matrix[row].length; column++) {
			if (!nodesSeen[row][column] && matrix[row][column] === 1) getRiverSize(row, column, matrix, nodesSeen, outputArr)
		}
	}
  return outputArr
}
const getRiverSize = (row: number, column: number, matrix: number[][], nodesSeen: boolean[][], output: number[]) => {
	let currentRiverSize = 0
	const queue: [[number, number]] = [[row, column]]
	while (queue.length) {
		const current = queue.pop()!
		const row = current[0]
		const column = current[1]
		if (nodesSeen[row][column] || matrix[row][column] === 0) continue
		nodesSeen[row][column] = true
		currentRiverSize++ 
		//Check all adjacent numbers if they seen and add them to queue
		queueAdjacentIndexs(row, column, matrix, nodesSeen, queue)
	}
	output.push(currentRiverSize)
} 

const queueAdjacentIndexs = (row: number, column: number, matrix: number[][], nodesSeen: boolean[][], queue: [[number, number]]) => {
	if (row < matrix.length - 1 && !nodesSeen[row + 1][column]) queue.push([row + 1, column])
	if (row > 0 && !nodesSeen[row - 1][column]) queue.push([row - 1, column])
	if (column < matrix[row].length - 1&& !nodesSeen[row][column + 1]) queue.push([row, column + 1])
	if (column > 0 && !nodesSeen[row][column - 1]) queue.push([row, column - 1])
}
