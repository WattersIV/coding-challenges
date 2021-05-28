function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b)
      let start = 0 
      let end = array.length - 1
      //if num too low increase index of start 
      //if too high decrease index of end 
      while ( start < end ) {
          const twoNumSum = array[start] + array[end]
          if (twoNumSum === targetSum) return [ array[start], array[end]]
          if (twoNumSum > targetSum ) end--
          if (twoNumSum < targetSum ) start++
      }
      return []
  }
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  