// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.
// Then print the respective minimum and maximum values as a single line of two space-separated long integers. 

function miniMaxSum(arr) {
  let high = arr[0]
  let low = arr[0]
  let others = 0
  for (const index of arr) {
    if (index > high) {
      high = index
    } 

    if (index < low) {
      low = index
    } 
  }
  for (const index of arr) {
    if (index !== low && index !== high) {
      others += index
    }
  }
  console.log(low + others, high + others )
}

miniMaxSum([1, 2, 3, 4, 5])