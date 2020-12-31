type Triplet = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number): Triplet[] {
  //O(n^2 operation)
  const sortedArr = array.sort((a, b) => a - b) 
  //start with pointers on the first two numbers to make sure it finishes sorted since only one num summed with those will be the target we can start 3rd
  //pointer on the right and move it in
  let output: Triplet[] = []

  //O(n^2 operation)
  for (let first = 0; first < array.length - 2; first++) {
    let second = first + 1
    let third = array.length - 1
    
    while (second < third) {
      const sum = array[first] + array[second] + array[third] 
      if (sum === targetSum) {
        output.push([array[first], array[second], array[third]])
        //Once match found we can move up an index on the second and not touch the first in order to see if there are more matches with the first 
        //We can also move the third back one index because we know the sum will be higher from shifting the second right
        second++
        third--
      } else if (sum > targetSum) {
        third--
      } else if (sum < targetSum) {
        second++
      }
    }
  }

  return output
}

//O(n^2)