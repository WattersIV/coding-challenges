export function moveElementToEnd(array: number[], toMove: number) {
  //sort the array
  array.sort((a, b) => a - b)

  //keep a value indicating how many number have been moved to the end of the array
  let numbersSwapped = 0
  let i = 0
  //While i is less than array.len - value  
  while (i < array.length - numbersSwapped) {
    //loop through the array O(n) until the target is found 
    if (array[i] === toMove) {
      //Swap the value with the position at arr.len - 1 - value O(1)
      console.log(array[i], array[array.length - 1 - numbersSwapped])
      swapNumbers(i, array.length - 1 - numbersSwapped, array)
      numbersSwapped++
    }
    i++
  }
  return array;
}

const swapNumbers = (target: number, toGoHere: number, arr: number[]) => {
  [arr[target], arr[toGoHere]] = [arr[toGoHere], arr[target]]
} 

//O(n)
