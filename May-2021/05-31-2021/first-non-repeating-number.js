function firstNonRepeatingCharacter(string) {
    //loop through the string and make a map of all the chars with appearnce numbers
      //Loop again and the first one to come up with an appeance value of 1 is the idx
      const chars = new Map()
      for (const char of string) {
          const currentValue = chars.get(char)
          chars.set(char, currentValue + 1 || 1)
      }
      for (let idx = 0; idx < string.length; idx++) {
          console.log(chars.get(string[idx]))
          if (chars.get(string[idx]) === 1) return idx 
      }
    return -1;
  }
  
  // Do not edit the line below.
  exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  