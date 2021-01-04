// An arcade game player wants to climb to the top of the leaderboard and track their ranking. The game uses Dense Ranking, so its leaderboard works like this:

// The player with the highest score is ranked number  on the leaderboard.
// Players who have equal scores receive the same ranking number, and the next player(s) receive the immediately following ranking number.
// Example



// The ranked players will have ranks , , , and , respectively. If the player's scores are ,  and , their rankings after each game are ,  and . Return .

// Function Description

// Complete the climbingLeaderboard function in the editor below.

// climbingLeaderboard has the following parameter(s):

// int ranked[n]: the leaderboard scores
// int player[m]: the player's scores 

function climbingLeaderboard(scores, alice) {
  //output arr
  let output = []
  for (const score of alice) {
    //rank var needs to reset every interation 
    let rank = 0
    //Loop through checking if score >= index
    for (let i = 0; i < scores.length; i++) {
      if (i !== 0 && scores[i] === scores[i - 1]) {
        //nothing
      } else {
        rank++
        if (scores.length - 1 === i) {
          rank++ 
          output.push(rank)
          scores.splice(i, 0, score)
          break;
        }
        if (score >= scores[i]) {
          output.push(rank)
          scores.splice(i, 0, score)
          break;
        } 
      }
    }
  }
  console.log(output)
} 

climbingLeaderboard([100, 90, 90, 80], [70, 80, 105, 40, 35])