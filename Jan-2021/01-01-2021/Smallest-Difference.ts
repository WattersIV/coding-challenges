// take in 2 arrays 
//Find the pair of smallest absoulte diff 
//return pair from array 1 then 2 in an array 

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  //Sort both arrays O(n^2)
  arrayOne.sort((a, b) => a - b)
  arrayTwo.sort((a, b) => a - b)

  //create comparision vars 
  let closestPair: number[] = []
  let smallestDiff = Infinity

  //Pointers 
  let pointerOne = 0
  let pointerTwo = 0

  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    //Calc absoulte diff
    const diff = Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo])

    //If nums are the same return them 
    if (diff === 0) {
      return [arrayOne[pointerOne], arrayTwo[pointerTwo]]
    }

    //if current dif is lowest save it for compairson and save the pair
    if (diff < smallestDiff) {
      smallestDiff = diff
      closestPair = [arrayOne[pointerOne], arrayTwo[pointerTwo]]
    }
    //if one number bigger than the other increment the other to make it larger
    if (arrayOne[pointerOne] < arrayTwo[pointerTwo]) {
      pointerOne++
    } else {
      pointerTwo++
    }
  }

  return closestPair;
}

//Outside of the sorting it is O(nlog(n) + mlog(m))