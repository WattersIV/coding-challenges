function tournamentWinner(competitions, results) {
    // [home , away]
      // 0 means away team won 1 means home
      //create a map of team names and values 
      //Loop throgh map and print highest num 
      //Dont need to add winless teams to the map
      const scores = new Map()
      
      for (let idx = 0; idx <= competitions.length - 1; idx++) {
          if (results[idx] === 0) {
              const currentScore = scores.get(competitions[idx][1])
              scores.set(competitions[idx][1], currentScore + 3 || 3)
              continue
          }
          const currentScore = scores.get(competitions[idx][0])
          scores.set(competitions[idx][0], currentScore + 3 || 3)
      }
      let winner = ''
      let mostWins = 0
      for (const [key, value] of scores) {
          if (value > mostWins) {
              winner = key 
              mostWins = value
          }
      }
      return winner
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;
  