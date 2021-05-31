function bubbleSort(array) {
    //check if current is less than next if not swap
      //Keep looping till no changes
      let changeMade = true
      while (changeMade) {
          changeMade = false
          for (let idx = 0; idx < array.length; idx++) {
              if (array[idx] > array[idx + 1]) {
                  swap(idx, idx + 1, array)
                  changeMade = true
              } 
          }
      }
      return array
  }
  
  function swap (first, second, array) {
      const temp = array[first] 
      array[first] = array[second] 
      array[second] = temp
  }
  
  // Do not edit the line below.
  exports.bubbleSort = bubbleSort;
  