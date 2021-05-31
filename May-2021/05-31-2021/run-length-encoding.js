function runLengthEncoding(string) {
    //loop through string and check if char ahead is the same if not add the code
        let count = 1
        let output = ''
        for (let idx = 0; idx < string.length; idx++) {
            if (string[idx] !== string[idx + 1] || count === 9) {
                output += `${count}${string[idx]}`
                count = 0
            }
            count++
        }
        return output
    }
    
    // Do not edit the line below.
    exports.runLengthEncoding = runLengthEncoding;
    