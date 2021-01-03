export function arrayOfProducts(array: number[]) {
  //Cant use division
	//I can loop through for each number but that would be O(n^2) time and O(n) space I think I can make it better 
	//Create an output array of length of the input array and fill with 1s 
	//Have a running total and move to the right 
	//First make output at current index equal to the running total 
	//then multiply the running total by number at that index in the input array
	//This would be O(n) time and O(n) space
	let output: number[] = new Array(array.length).fill(1)
	
	let movingRightTotal = 1 
	for (let i = 0; i < array.length; i++) {
		output[i] = movingRightTotal 
		movingRightTotal *= array[i]
	} 
	
  let movingLeftTotal = 1 
	for (let i = array.length - 1; i > -1; i--) {
    output[i] *= movingLeftTotal 
		movingLeftTotal *= array[i]
	}
	
  return output;
}
