function isPalindrome(string) {
    //if theres an odd amount of chars the first and second will need to be the same but reversed on the back
      //If theres an even num the middle two chars will need to be the same
      //Check if even or odd 
      //reverse the other end and check if the same as front 
      if (string.length % 2 === 0) {
          const front = string.slice(0, Math.floor(string.length / 2))
          const back = string.slice(Math.ceil(string.length / 2), string.length)
          const reverseBack = [...back].reverse().join('')
          if (reverseBack === front) return true 
          return false
      } else {
          const mid = string.length / 2
          const front = string.slice(0, mid)
          const back = string.slice(mid + 1, string.length)
          const reverseBack = [...back].reverse().join('')
          if (reverseBack === front) return true 
          return false
      }
  }
  
  // Do not edit the line below.
  exports.isPalindrome = isPalindrome;
  