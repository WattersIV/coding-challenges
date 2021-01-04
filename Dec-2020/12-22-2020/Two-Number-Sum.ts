//Time complexity N log(N)
export function twoNumberSum(array: number[], targetSum: number) {
  //sort array small to big N(log)N operation will mutate the array
  array.sort((a, b) => a - b) 
  
  let left = 0 
  let right = array.length - 1
  //quicksort 
  while (left < right) {
    if (array[left] + array[right] === targetSum) {
      return [array[left], array[right]]
    } 
    if (array[left] + array[right] > targetSum) {
      right--
    } 
    if (array[left] + array[right] < targetSum) {
      left++
    }
  }
  return []
}

