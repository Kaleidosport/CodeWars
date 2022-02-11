// Origin: https://www.codewars.com/kata/5d68d05e7a60ba002b0053f6

bonus = function(arr, s) {
    let max = Math.max(...arr)
    let intermediary = s / arr.reduce((a, b) => a + max / b, 0)
    return arr.map(c => Math.round(intermediary * max / c))
}

/** Voted best practice:
 * 
 * bonus = function(arr, s) {
  let total = arr.reduce((a,c) => a + 1/c, 0);
  return arr.map(e => Math.round(s*(1/e)/total))
 }
 * 
 */