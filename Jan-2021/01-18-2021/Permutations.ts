export function getPermutations(array: number[]) {
	const permutations: number[][] = []
	getPositions(array, 0, permutations)
  return permutations;
}

const getPositions = (arr: number[], startingIndex: number, permutations: number[][]) => {
	if (startingIndex === arr.length - 1) {
		permutations.push(arr.slice()) //creates a snapshot of the current array without changing it
	} else {
		for (let i = startingIndex; i < arr.length; i++) {
			swap(startingIndex, i, arr)
			getPositions(arr, startingIndex + 1, permutations)
			swap(startingIndex, i, arr)
		}
	}
}

const swap = (first: number, second: number, arr: number[]) => {
	const temp = arr[first]
	arr[first] =  arr[second]
	arr[second] = temp
}