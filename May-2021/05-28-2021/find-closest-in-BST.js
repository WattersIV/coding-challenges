function findClosestValueInBst(tree, target) {
    //check if next node is closer to target if null then return last node
        return searchBST(tree, target, tree.value)
    }
    
    const searchBST = (tree, target, closest) => {
        let current = tree
        while (current !== null) {
            console.log(tree, closest)
            if (Math.abs(current.value - target) < Math.abs(closest - target)) {
                closest = current.value
            } 
                if (current.value > target) {
                    current = current.left
                } else if (current.value < target) {
                    current = current.right
                } else {
                    break
                }
        }
        return closest
    }
    
    // This is the class of the input tree. Do not edit.
    class BST {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }
    
    // Do not edit the line below.
    exports.findClosestValueInBst = findClosestValueInBst;
    