// Origin: https://www.codewars.com/kata/54da5a58ea159efa38000836

let findOdd = (A) => A.find((item, index) => A.filter(element => element === item).length % 2)

/** Voted best practice & most clever:
 * 
 * const findOdd = (xs) => xs.reduce((a, b) => a ^ b)
 * ^ operator => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR
 * 
 */