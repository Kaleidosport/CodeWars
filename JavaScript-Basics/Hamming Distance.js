// Origin: https://www.codewars.com/kata/5410c0e6a0e736cf5b000e69

function hamming (a,b) {
    let count = 0
      for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) count++
    }
    return count
}

// ************** OR **************

let hamming = (a,b) => [...a].filter((l, i) => a[i] !== b[i]).length

/** Smart solution using reduce():
 * 
 * [...a].reduce((pre, val, idx) => pre + (val !== b[idx]), 0)
 * 
 */