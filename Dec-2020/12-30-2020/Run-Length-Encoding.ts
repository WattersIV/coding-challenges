export function runLengthEncoding(string: string) {
  //Keep track of run
    let run = 1
    //Initalize empty string to append to
    let output = ''
    //Start at second char and loop once timepast the end of the string
    for (let i = 1; i <= string.length; i++) {
      if (string[i] === string[i - 1]) {
        //If run is 9 we need to break it apart and start a new run
        if (run === 9) {
          output += `${run}${string[i - 1]}`
          run = 0
        }
        run++ 
      } else {
        //If the prev isnt the same as the current append to string and start new run
        output += `${run}${string[i - 1]}`
        run = 1
      }
    }
    return output;
  } 

  //O(n)
  