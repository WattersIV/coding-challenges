// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, depth = 1) {
    //Loop through array checking if next is an array 
      //if it is an array loop through that array
      //can recursivly call same func for each time its and arr
      let sum = 0
      for (const element of array) {
      if (Array.isArray(element)) {
          sum += productSum(element, depth + 1)			 
      } else {
          sum += element
      }
  }
      return sum * depth
  }
  
  
  // Do not edit the line below.
  exports.productSum = productSum;
  