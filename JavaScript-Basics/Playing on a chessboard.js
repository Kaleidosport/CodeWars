// Origin: https://www.codewars.com/kata/55ab4f980f2d576c070000f4

function game(n) {
    // your code
  if (n % 2) return [Math.pow(n, 2), 2] // Reminder: (n % 2) is the same as (n % 2 === 0)
  else return [Math.pow(n, 2) / 2]
} // Simpler once I found the pattern

/** Shorter stint:
 * const game = (n) => n % 2 ? [n * n, 2] : [n / 2 * n]
 */