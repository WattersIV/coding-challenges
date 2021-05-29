function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // fastest will put highest in one ground with lowest of other
      //Lowest will pair highest and lowest of both together
      redShirtSpeeds.sort((a, b) => a - b)
      blueShirtSpeeds.sort((a, b) => a - b)
      let speed = 0
      if (fastest) {
          for (let idx = 0; idx < blueShirtSpeeds.length; idx++) {
              const redShirtIdx = redShirtSpeeds.length - 1 - idx
              speed += Math.max(blueShirtSpeeds[idx], redShirtSpeeds[redShirtIdx])
          } 
      } else {
              for (let idx = 0; idx < blueShirtSpeeds.length; idx++) {
                  speed += Math.max(blueShirtSpeeds[idx], redShirtSpeeds[idx])
              }
          }
    return speed;
  }
  
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;
  