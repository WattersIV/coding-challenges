"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoNumberSum = void 0;
//Time complexity N log(N)
function twoNumberSum(array, targetSum) {
    //sort array small to big N(log)N operation will mutate the array
    array.sort(function (a, b) { return a - b; });
    var left = 0;
    var right = array.length - 1;
    //quicksort 
    while (left < right) {
        if (array[left] + array[right] === targetSum) {
            return [array[left], array[right]];
        }
        if (array[left] + array[right] > targetSum) {
            right--;
        }
        if (array[left] + array[right] < targetSum) {
            left++;
        }
    }
    return [];
}
exports.twoNumberSum = twoNumberSum;
