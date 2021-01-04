// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
export class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value: number): BST {
    let current: BST = this
    while (true) {
      if (current.value > value) {
        if (!current.left) {
          current.left = new BST(value)
          break
        } else {
          current = current.left
        }
      } else {
        if (!current.right) {
          current.right = new BST(value)
          break
        } else {
          current = current.right
        }
      }
    }

    return this;
  }

  contains(value: number) {
    let current: BST | null = this
    while (current !== null) {
      if (current.value > value) {
        current = current.left
      } else if (current.value < value) {
        current = current.right
      } else {
        return true
      }
    }
    return false;
  }

  remove(value: number, parent: BST | null = null) {
    //Do nothing if tree is 1 node
    let current: BST | null = this

    while (current !== null) {
      if (current.value > value) {
        parent = current
        current = current.left
      } else if (current.value < value) {
        parent = current
        current = current.right
      } else {
        if (current.left !== null && current.right !== null) {
          //Move smallest number on the right side to the node to be deleted
          current.value = current.right.getSmallestValue()
          //Need to remove the swaped value
          current.right.remove(current.value, current)
        } else if (parent === null) {
          if (current.left !== null) {
            current.value = current.left.value 
            current.right = current.left.right
            current.left = current.left.left 
          } else if (current.right !== null) {
            current.value = current.right.value 
            current.left = current.right.left 
            current.right = current.right.right
          } else {
            //single node tree do nothing
          }
        } else if (parent.left === current) {
          parent.left = current.left !== null ? current.left : current.right
        } else if (parent.right === current) {
          parent.right = current.left !== null ? current.left : current.right
        } 
        break
      } 
    }
    return this
  }
  getSmallestValue(): number {
    let current: BST = this 
    while (current.left !== null) {
      current = current.left
    }    
    return current.value
  }
}
