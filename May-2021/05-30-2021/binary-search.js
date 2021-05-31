function binarySearch(array, target) {
    //Start with mid index
      //Check if === target
      //If larger go halfway right and if not left ..repeat
      let leftPtr = 0
      let rightPtr = array.length - 1
      while (leftPtr <= rightPtr) {
          let middleIdx = Math.floor((rightPtr + leftPtr) / 2)
          let middleNumber =  array[middleIdx]
          if (middleNumber === target) return middleIdx
          if (target > middleNumber) {
              leftPtr = middleIdx + 1
          } else {
              rightPtr = middleIdx - 1
          }
      }
      return -1
  }
  
  // Do not edit the line below.
  exports.binarySearch = binarySearch;
  