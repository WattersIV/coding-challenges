function findThreeLargestNumbers(array) {
    //Have three vars and check if bigger than first-second-third
      let first = -Infinity
      let second = -Infinity
      let third = -Infinity
      for (const number of array) {
          if (number > first) {
              third = second
              second = first 
              first = number
          } else if (number > second) {
              third = second 
              second = number
          } else if (number > third) {
              third = number
          }
      }
      return [third, second, first]
  }
  
  // Do not edit the line below.
  exports.findThreeLargestNumbers = findThreeLargestNumbers;
  