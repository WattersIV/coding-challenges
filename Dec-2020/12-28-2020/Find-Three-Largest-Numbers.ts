export function findThreeLargestNumbers(array: number[]) {
  let highest = -1000
  let second = -1000
  let third = -1000
  for (let i = 0; i < array.length; i++) {
    if (highest <= array[i]) {
      console.log('highest', array[i])
      third = second
      second = highest
      highest = array[i]
    } else if (second <= array[i]) {
      console.log('second', array[i])
      third = second
      second = array[i]
    } else if (third < array[i]) {
      console.log('third', array[i])
      third = array[i]
    }
  }
  return [third, second, highest];
}

//O(n) this code will not work for all cases. It works under the assumption that a top 3 int will never be less than -1000 
//To improve this I could se the 3 highest to null and check if its null in the loop