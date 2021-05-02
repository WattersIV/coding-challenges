function threeNumberSort(array, order) {
  //Can rank the 3 values 
  //Have ptrs at each end to track the completion of the outside numbers 
  //Check have middle ptr to search and check if the value the first or last in the order 
  //if it is then switch with the position of the end and advance the end and the mid a spot
  //when the mid ptr is greater or equal to the last ptr then its sorted because 
  //Cant cross first because there will be at least one middle int
  let leftPtr = 0
  let midPtr = 0
  let rightPtr = array.length - 1

  while (midPtr <= rightPtr) {
    if (array[midPtr] === order[0]) {
      swap(midPtr, leftPtr, array)
      leftPtr++
      midPtr++
    } else if (array[midPtr] === order[2]) {
      swap(midPtr, rightPtr, array)
      rightPtr--
    } else {
      midPtr++
    }

  }
  return array
}

function swap(i, j, array) {
  const temp = array[i]
  array[i] = array[j]
  array[j] = temp
}
// Do not edit the line below.
exports.threeNumberSort = threeNumberSort;
