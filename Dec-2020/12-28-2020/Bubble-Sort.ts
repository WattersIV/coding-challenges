export function bubbleSort(array: number[]) {
  let moveMade: boolean = true
  while (moveMade) {
    moveMade = false
    let timesRun = 0 //At worst we will only need to check 1 less index each iteration so increment this 1 after each loop
    for (let i = 0; i < array.length - 1 - timesRun; i++) {
      if (array[i] > array[i + 1]) { 
        console.log(array[i], array[i + 1])
        swapValues(i, i + 1, array)
        console.log(array[i], array[i + 1])
        moveMade = true
      }
    }
    timesRun++
  }
  return array;
}

const swapValues = (first: number, second: number, array: number[]) => {
const temp = array[second]
array[second] = array[first] 
array[first] = temp
} 

//O(n^2) 