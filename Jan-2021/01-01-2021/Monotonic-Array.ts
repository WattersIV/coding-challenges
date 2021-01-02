export function isMonotonic(array: number[]) {
  //pattern string empty to start - change to asc or desc when a pattern is found
  let pattern = ''

  //loop through checking if the prev is less than or greater then the current 
  for (let i = 1; i < array.length; i++) {
    
    //if pattern breaks rule return false
    if ( pattern === 'asc' && array[i] < array[i - 1]) {
      return false
    }
    if (pattern === 'desc' && array[i] > array[i - 1]) {
      return false
    }

    //Only set pattern if there isnt one and its not equal to prev
    if (pattern === '' && array[i] > array[i - 1]) {
      pattern = 'asc'
    }
    if (pattern === '' && array[i] < array[i - 1]) {
      pattern = 'desc'
    }
  }
  return true;
}

//O(n)