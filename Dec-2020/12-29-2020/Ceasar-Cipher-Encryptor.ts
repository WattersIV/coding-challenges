export function caesarCipherEncryptor(string: string, key: number) {
	const newWord = []
	const keyFormatted = key % 26
	const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
	for (const letter of string) {
		newWord.push(encryptChar(letter, keyFormatted, alphabet))
	}
	return newWord.join('');
} 

const encryptChar = (letter: string, key: number, alphabet: string[]) => {
	const newLetterIndex = alphabet.indexOf(letter) + key
	return alphabet[newLetterIndex % 26]
}

//O(n)