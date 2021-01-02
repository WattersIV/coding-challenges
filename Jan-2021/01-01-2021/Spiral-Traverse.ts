//[0][i] till arr0.len                        Right
//[i][array.len - 1] till arr.len             Down
//[array[array.len - 1]][i] -- till 0         Left
//[i][array[array.len - 1] -- till 1          Up 


export function spiralTraverse(array: number[][]) {
  //Get N by looping through the whole thing since the shape is not known
  let area = 0
  for (const arrayNum of array) {
    for (const num of arrayNum) {
      area++
    }
  }
  
  let output: number[] = []
  
  //call recursive function to append to the output
  getSpiralOrder(output, 0, array, area)
  
  return output;
}

const getSpiralOrder = (output: number[], spirals: number, arr: number[][], area: number) => {
  //If the N count on the input and the output are the same it is finished
  if (area === output.length) {
    return 
  }
  //Starting spiral
  goRight(output, spirals, arr, area)
}

const goRight = (output: number[], spirals: number, arr: number[][], area: number) => {
  if (area === output.length) {
    return 
  }
  //each spiral makes us need to check one less at the start and end on the line
  for (let i = spirals; i < arr[spirals].length - spirals - 1; i++) {
    output.push(arr[spirals][i])
  }

  goDown(output, spirals, arr, area)
} 

const goDown = (output: number[], spirals: number, arr: number[][], area: number) => {
  if (area === output.length) {
    return 
  } 
  for (let i = spirals; i < arr.length - spirals; i++) {
    output.push(arr[i][arr[spirals].length - spirals - 1])
  }

  goLeft(output, spirals, arr, area)
}

const goLeft = (output: number[], spirals: number, arr: number[][], area: number) => {
  if (area === output.length) {
    return 
  }
  for (let i = arr[spirals].length - spirals - 2; i > spirals; i--) {
    output.push(arr[arr.length - spirals - 1 ][i])
  }

  goUp(output, spirals, arr, area)
} 

const goUp = (output: number[], spirals: number, arr: number[][], area: number) => {
  if (area === output.length) {
    return 
  } 
  for (let i = arr.length - spirals - 1; i > spirals; i--) {
    output.push(arr[i][spirals])
  }

  goRight(output, spirals + 1, arr, area)
} 

//O(n)