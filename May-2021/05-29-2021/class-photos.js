function classPhotos(redShirtHeights, blueShirtHeights) {
	if (redShirtHeights.length === 1 && redShirtHeights[0] === blueShirtHeights[0]) return false
	redShirtHeights.sort((a, b) => a - b) 
	blueShirtHeights.sort((a, b) => a - b) 	
	const smaller =  redShirtHeights[0] > blueShirtHeights[0] ? blueShirtHeights : redShirtHeights
	const larger = redShirtHeights[0] > blueShirtHeights[0] ?  redShirtHeights : blueShirtHeights
	for (let i = 0; i < smaller.length - 1; i++) {
		if (smaller[i] >= larger[i]) return false
	}	
	return true
}

// Do not edit the line below.
exports.classPhotos = classPhotos;
