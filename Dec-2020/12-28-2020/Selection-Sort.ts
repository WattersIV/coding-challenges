export function selectionSort(array: number[]) {
  let searchStartIndex = 0 //Length of sorted array
  while (searchStartIndex < array.length - 1) { //Keep searching untill sorted array is the same size as the input arr 
    let smallest = searchStartIndex
    for (let i = searchStartIndex + 1; i < array.length; i++) {
      if (array[i] < array[smallest]) {
        smallest = i //Save index in smallest var for swapVal function
      }
    }
    swapValues(searchStartIndex, smallest, array)
    searchStartIndex++
  }
  return array;
}

const swapValues = (first: number, second: number, array: number[]) => {
  const temp = array[second]
  array[second] = array[first] 
  array[first] = temp
  } 