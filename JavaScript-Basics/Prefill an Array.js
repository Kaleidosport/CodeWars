// Origin: https://www.codewars.com/kata/54129112fb7c188740000162

function prefill(n, v) {
    if (parseInt(n) !== Math.abs(n)) throw new TypeError(`${n} is invalid`)
    return parseInt(n) ? Array(n).fill(v) : []
} // The 2nd parseInt(n) could be replaced by Unary Plus Operator (+) as +n, not the first

/** Noteworthy solution:
 * 
 * function prefill(n, v) {
  if (typeof(n) == 'boolean' || isNaN(Number(n)) || (n % 1) != 0 || Number(n) < 0) throw new TypeError(`${n} is invalid`)
  
  let array = new Array(Number(n));
  
  return array.fill(v);
  }
 * 
 */