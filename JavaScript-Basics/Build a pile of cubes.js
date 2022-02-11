// Origin:

function findNb(m) {
    for (let i = 0; ; i++) {
      if (m > 0) {
        let value = Math.pow(i + 1, 3)
      m -= value
      } 
      else if (m === 0) {
        return i
      }
      else return -1      
    }
}

// *************** OTHER METHOD ****************

function findNb(m) {
    let i = 0, value = 0
    while (value < m) {
        i++
        value += Math.pow(i, 3)
    }
    return value === m ? i : -1
}

/** Voted most clever:
 * 
 * function findNb(m) {
  var n = 0
  while (m > 0) m -= ++n**3
  return m ? -1 : n
}
 * 
 */