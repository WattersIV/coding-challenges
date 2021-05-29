function minimumWaitingTime(queries) {
    //sort the array and add all the wait times
      //Keep an array of wait times and add them up
      const waitTimes = [0]
      queries.sort(( a, b) => a - b)
       for (let i = 1; i < queries.length; i++) {	
          waitTimes.push(waitTimes[i - 1] + queries[i - 1])
      }
      console.log(waitTimes)
      let totalWait = 0
      for (const num of waitTimes) {
          totalWait += num
      }
      return totalWait
  }
  
  // Do not edit the line below.
  exports.minimumWaitingTime = minimumWaitingTime;
  