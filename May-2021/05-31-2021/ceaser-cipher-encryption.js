function caesarCipherEncryptor(string, key) {
    // get ascii for each char add key to it and modulus by the highest possible number
      let str = ''
      const newKey = key % 26
      for (const char of string) {
          str += getNewLetter(char, newKey)
      }
      return str
  }
  
  function getNewLetter (char, key) {
      const newAscii = char.charCodeAt() + key
      return newAscii > 122 ? String.fromCharCode((newAscii % 122) + 96) : String.fromCharCode(newAscii)  
  }
  
  // Do not edit the line below.
  exports.caesarCipherEncryptor = caesarCipherEncryptor;
  