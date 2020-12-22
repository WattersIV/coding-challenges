// You have been asked to help study the population of birds migrating across the continent. Each type of bird you are interested in will be identified by an integer value.
// Each time a particular kind of bird is spotted, its id number will be added to your array of sightings. You would like to be able to find out which type of bird is most
// common given a list of sightings. Your task is to print the type number of that bird and if two or more types of birds are equally common, choose the type with the smallest 
//ID number.

// For example, assume your bird sightings are of types . There are two each of types  and , and one sighting of type . Pick the lower of the two types seen twice: type  

function migratoryBirds(arr) {
  const birds = {}
  //loop through and count the number of occurances
  for (const bird of arr)  {
    //Make a key for each type if it doesnt exist or increment by 1
    birds[bird] = (birds[bird] + 1) || 1
  } 
  let highestValue = 0
  //Loop through key values and find highest value
  for (const bird in birds) {
    if (birds[bird] > highestValue) {
      highestValue = birds[bird]
    }
  } 
  let mostSpottedBirds = []
  //take highest value and add any keys with a matching value to an array
  for (const bird in birds) {
    if (birds[bird] === highestValue) {
      mostSpottedBirds.push(bird)
    }
  }
  //If array length isnt 1 find the lowest number and return it
  if (mostSpottedBirds.length !== 1) {
    let lowest = mostSpottedBirds[0]
    for (const bird of mostSpottedBirds) {
      if (bird < lowest) {
        lowest = bird
      }
    }
    return lowest 
  }
  return mostSpottedBirds
} 

console.log(migratoryBirds([1,1,1,2,2,2,3]))