//Track a sorted subarray within the input array 
//For each new element check where it fits in the subarray and insert it untill the whole array is the sorted sub array

export function insertionSort(array: number[]) {
  for (let i = 1; i < array.length; i++) { //Looping to complete the sorted array
    
    let j = i //Next element to check is always the len of the sub array
    
    while (j > 0 && array[j] < array[j - 1]) { //If out of order swap
      swapValues(j, j - 1, array)
      j-- //move from last position in sorted array down one spot 
    }
  }
  return array;
}

const swapValues = (first: number, second: number, array: number[]) => {
  const temp = array[second]
  array[second] = array[first] 
  array[first] = temp
  } 
  
  //O(n^2) 