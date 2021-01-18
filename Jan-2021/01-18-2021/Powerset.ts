export function powerset(array: number[]) {
  //start with an arr len of 0 then extend it and keep adding that number to every other set that already exists
    const powersets: number[][] = [[]]
    for (const element of array) {
      const currentLength = powersets.length
      for (let i = 0; i < currentLength; i++) {
        const addToSet = powersets[i]
        powersets.push(addToSet.concat(element))
      }
    }
    return powersets
  }
  