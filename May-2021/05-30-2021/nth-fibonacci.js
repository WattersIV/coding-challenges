function getNthFib(n) {
    const numbers = [0, 1]
      if (n <= 1) return numbers[n - 1]
      while (n > numbers.length) {
          const newFibNum = numbers[numbers.length - 1] + numbers[numbers.length - 2]
          numbers.push(newFibNum)
      }
      return numbers[numbers.length - 1]
  }
  
  // Do not edit the line below.
  exports.getNthFib = getNthFib;
  