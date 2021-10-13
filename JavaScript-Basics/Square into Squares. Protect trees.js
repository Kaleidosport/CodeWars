// Origin: https://www.codewars.com/kata/54eb33e5bc1a25440d000891/javascript

function decompose(n) {
    let array = []
    function equalize(d, number) {
      if (d < 0) return false
      else if (d === 0) return true
      
      for (let i = number - 1; i > 0; i--) {
        sum = equalize(d - Math.pow(i, 2), i)
        if (sum) {
          array.push(i)
          return array
        }
      }
      return null
    }
    return equalize(n ** 2, n)
}
  

/* Most clever:
 * function decompose(n, n2=n*n, i=n, prev) {
  while(n2>0 && i-->1) if (prev = decompose(n, n2-i*i, i)) return prev.concat([i]);
  return (n2 == 0) ? [] : null;
  }
 *
 */