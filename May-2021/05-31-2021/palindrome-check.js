function isPalindrome(string) {
    //Create 2 ptrs at each end and check if chars are the same before crossing
        let left = 0
        let right = string.length - 1
        while (right > left) {
            if (string[left] !== string[right]) return false
            left++
            right--
        }
        return true
    }
    
    // Do not edit the line below.
    exports.isPalindrome = isPalindrome;
    