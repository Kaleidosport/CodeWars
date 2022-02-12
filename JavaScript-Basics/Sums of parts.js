// Origin:

function partsSums(ls) {
    let sums = [], sum = ls.reduce((p, c) => p + c, 0)
    if (ls.length === 0) return [0]
    else {
      for (let i = 0; i <= ls.length; i++) {
      sums.push(sum)
      sum -= ls[i]
      }
      return sums
    }  
}

// ************** Other method **************

function partsSums(ls) {
    ls = [0, ...ls]
    let startingSum = ls.reduce((previous, current) => previous + current, 0)
    let sums = ls.map(x => startingSum -= x)
    return sums
}