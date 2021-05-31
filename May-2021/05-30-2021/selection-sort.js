function selectionSort(array) {
    //Keep var of sorted arr len
      //loop and see of number is less than one at sorted arr len 
      //if one is found swap 
      //after loop increment sorted arr len
      for (let sortedLen = 0;  sortedLen < array.length - 1; sortedLen++) { 
          let compareValue = sortedLen
          while (compareValue < array.length) {
              if ( array[compareValue] < array[sortedLen]) {
                  swap(compareValue, sortedLen, array)
              } 
              compareValue++
          }
      } 
      return array
  }
  
  function swap (i, j, arr) {
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
  }
  
  // Do not edit the line below.
  exports.selectionSort = selectionSort;
  