"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSubsequence = void 0;
function isValidSubsequence(array, sequence) {
    var arrIndex = 0;
    var seqIndex = 0;
    while (arrIndex < array.length && seqIndex < sequence.length) {
        if (sequence[seqIndex] === array[arrIndex]) {
            arrIndex++;
            seqIndex++;
        }
        else {
            arrIndex++;
        }
    }
    return seqIndex === sequence.length;
}
exports.isValidSubsequence = isValidSubsequence;
//O(n) 
