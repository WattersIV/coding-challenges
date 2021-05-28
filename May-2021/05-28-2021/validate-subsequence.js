function isValidSubsequence(array, sequence) {
    //single num is valid 
      //Iterate through array looking for the current index of the sequence 
      //If found go to next num in sequence 
      //Return true of index is seq.len - 1 and one is found
      let sequencePtr = 0
      for (const index of array) {
          if (index === sequence[sequencePtr]) {
              if (sequencePtr === sequence.length - 1) return true
                  sequencePtr++	
                  continue
              }
      }
      return false
  }
  
  // Do not edit the line below.
  exports.isValidSubsequence = isValidSubsequence;
  