//Recursivley get and add fibonacci numbers to an array 
//When return the nth number 

export function getNthFib(n: number) {
  let fibNums: number[] = [0, 1]
  getFib(n, fibNums, 2)
  return fibNums[n - 1];
} 

const getFib = (n:number, arr: number[], index: number) => {
  if (index > n) {
    return
  }
  arr.push(arr[index - 1] + arr[index - 2])
  getFib(n, arr, index + 1)
}

//O(n) 