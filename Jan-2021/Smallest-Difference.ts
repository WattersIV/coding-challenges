// take in 2 arrays 
//Find the pair of smallest absoulte diff 
//return pair from array 1 then 2 in an array 

export function smallestDifference(arrayOne: number[], arrayTwo: number[]) {
  //Sort 2nd array O(n^2)
  arrayTwo.sort((a, b) => a - b)
  //Loop through 1st array and keep track of absoulte diff
  let closest; 
  let closestPair;
  
  //O(n^2)
  for (const firstValue of arrayOne) {
    for (let i = 0; i < arrayTwo.length; i++) {
      //Absoulte difference 
      const diff = Math.abs(firstValue - arrayTwo[i])
      let closestInIteration;
      //if same number return them
      if (diff === 0) {
        return [firstValue, arrayTwo[i]]
      }

      //Checking if the value is getting closer to 0 within the current iteration
      if (!closestInIteration || closestInIteration > diff) {
        closestInIteration = diff

        //Checking if the value is the closest to 0 in all iterations
        if (!closest || closest > diff) {
          closestPair = [firstValue, arrayTwo[i]]
          closest = diff
        } 
      } else {
        //If value is not getting closer break loop
        break
      }  
    }
  } 
  return closestPair;
}
