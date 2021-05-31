function generateDocument(characters, document) {
    //loop through array and put chars into a map with the number of apperances 
    //Go through the doc and keep decrementing the apperances  
    //If the value is 0 or null return false
        let chars = new Map()
        for (const char of characters ) {
            const currentValue = chars.get(char)
            chars.set(char, currentValue + 1 || 1)
        }
        for (const char of document) {
            let value = chars.get(char)
            console.log(char, value)
            if (!value) return false 
            chars.set(char, value - 1)
        }
        return true
    }
    
    // Do not edit the line below.
    exports.generateDocument = generateDocument;
    