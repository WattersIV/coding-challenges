export function isPalindrome(string: string) {
  const middle = string.length / 2
	let leftStart = 0 
	let rightStart = string.length - 1
	
	if (string.length === 2) {
		return string[0] === string[1] 
	}
	
	while(leftStart < middle - 1) {
		if (string[leftStart] !== string[rightStart]) {
			return false
		}
		leftStart++ 
		rightStart--
	}
	return true
}

//O(n) 