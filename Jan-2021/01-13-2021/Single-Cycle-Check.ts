export function hasSingleCycle(array: number[]) {
  //Each number would have to have a UNIQUE index to go to meaning none of the others can direct there
	//Keep a checklist of the indexs pointed to and if one repeats send false 
	//if repeat is on check # arr.length is true 
	
	//O(n) time O(1) space
	
  let loops = 0
	let pointer = 0
	while (loops < array.length) {
		if (loops !== 0 && pointer === 0) return false	
		pointer = nextIndex(pointer, array)
		loops++
	} 
	return pointer === 0 
} 

const nextIndex = (currentIndex: number, arr: number[]) => {
	const indexToGoTo = (currentIndex + arr[currentIndex]) % arr.length //Handles going past limit too high
	return indexToGoTo >= 0 ? indexToGoTo : indexToGoTo + arr.length //Handles going past limit too low
}
