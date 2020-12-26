//Sum of the elemenets inside the array 
//Multiplied by the level of depth
type SpecialArray = Array<number | SpecialArray>;

// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
export function productSum(array: SpecialArray, depth: number = 1) {
  let total: number = 0
  for (const index of array) {
    if (Array.isArray(index)) {
      total += productSum(index, depth + 1) //add stacks of the function call but returning the return total to the first call
    } else {
      total += index
    }
  }
  return total * depth
}

//O(n)