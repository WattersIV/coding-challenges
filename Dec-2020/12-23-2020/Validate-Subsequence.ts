export function isValidSubsequence(array: number[], sequence: number[]) {
  let arrIndex = 0
  let seqIndex = 0
  
  while (arrIndex < array.length && seqIndex < sequence.length) {
    if (sequence[seqIndex] === array[arrIndex]) {
      arrIndex++
      seqIndex++
    } else {
      arrIndex++
    }
  }
  return seqIndex === sequence.length
} 
 

//O(n) 