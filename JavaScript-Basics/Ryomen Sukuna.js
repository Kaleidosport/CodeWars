// Origin: https://www.codewars.com/kata/607a8f270f09ea003a38369c

function sukuna(n) {
    let a = 2, b = 2, arr = new Set()

    while (a ** b <= n) {
      arr.add(a ** b)
      b++
      if (a ** b > n) {
        b = 2
        a++
      }
    }
    return n - arr.size
}

/** Voted best practice:
 * 
 * function sukuna(n) {
  
  let sqrt = Math.floor(Math.sqrt(n));
  let powers = new Set();
  
  for (let i = 2; i <= sqrt; i++)
    for (let j = 2; i ** j <= n; j++)
      powers.add(i ** j);

  return n - powers.size;
  
} 
 * 
 */