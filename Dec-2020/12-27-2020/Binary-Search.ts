export function binarySearch(array: number[], target: number): number {
  let rightLimit: number = array.length - 1
  let leftLimit: number = 0
  while (rightLimit >= leftLimit) {
    console.log(rightLimit, leftLimit)
    let middle: number = Math.round((rightLimit + leftLimit) / 2)
    if (array[middle] === target) {
      return middle
    } else if (array[middle] > target) {
      rightLimit = middle - 1
    } else {
      leftLimit = middle + 1
    }
  }
    return -1;
  } 
  
  //O(log(n)) 
  