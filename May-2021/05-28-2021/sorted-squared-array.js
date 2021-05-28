function sortedSquaredArray(array) {
    //two neg ints square is positive 
    //Create a new array of len arr 
    //go left to right and if left val if larger input it in right end of array
    const squaredArr = new Array(array.length).fill(0)
    let leftPtr = 0
    let rightPtr = array.length - 1
        for (let i = array.length - 1; i >= 0; i-- ) {
            const highNum = array[rightPtr]
            const lowNum = array[leftPtr]
            //Need to compare absolute val for squaring
            if (Math.abs(lowNum) > Math.abs(highNum)) {
                squaredArr[i] = lowNum * lowNum
                leftPtr++
                continue
            } 
            squaredArr[i] = highNum * highNum
            rightPtr --
        }
        return squaredArr
    }
    
    // Do not edit the line below.
    exports.sortedSquaredArray = sortedSquaredArray;
    