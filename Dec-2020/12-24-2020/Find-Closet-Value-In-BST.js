"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findClosestValueInBst = void 0;
var BST = /** @class */ (function () {
    function BST(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    return BST;
}());
function findClosestValueInBst(tree, target) {
    var current = tree;
    var diffrence;
    var prev;
    var searchTree = function () {
        if (current === null) {
            console.log('Line 24 returning...', prev.value);
            return prev.value;
        }
        //current - value if  0 return value
        diffrence = target - current.value;
        if (diffrence === 0) {
            console.log('Line 31 returning...', prev.value);
            return target;
            //if positive int go right 
        }
        else if (diffrence > 0) {
            //if next int further from 0 than prev return prev
            if (prev !== undefined && diffrence >= Math.abs(prev.diff)) {
                console.log('Line 38 returning...', prev.value);
                return prev.value;
            }
            //set new prev and current and call function again
            prev = {
                diff: diffrence,
                value: current.value
            };
            current = current.right;
            searchTree();
        }
        else {
            //if next int further from 0 than prev return prev
            if (prev !== undefined && Math.abs(diffrence) <= Math.abs(prev.diff)) {
                console.log('Line 53 returning...', prev.value);
                return prev.value;
            }
            //set new prev and current and call function again
            prev = {
                diff: diffrence,
                value: current.value
            };
            current = current.left;
            searchTree();
        }
    };
    console.log(searchTree());
}
exports.findClosestValueInBst = findClosestValueInBst;
