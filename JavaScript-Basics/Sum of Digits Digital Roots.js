// Origin: https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
    while (n.toString().length > 1) { // OR if (n < 10) return n, then (else) return 2nd line
      n = [...n.toString()].reduce((a, b) => Number(a) + Number(b), 0)
    }
    return n
} // Kinda proud since no one came up with that particular solution 8D

/** Voted best practice and most clever:
 * return (n - 1) % 9 + 1
 * 
 * 1. The remainder of dividing the number by 9 is equal to the remainder of dividing the sum of the number's digits by 9
 * 2. The last recursive sum is a one-digit number
 * 3. The remainder of dividing the one-digit number by 9 is equal to this one-digit number (8 % 9 = 8)
 * 
 * Noteworthy:
 * 
 * function digital_root(n) {
  if (n < 10) return n
  return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
  }
 * 
 * Also: return n > 0 ? 1 + ((parseInt(n) - 1) % 9) : 0
 */