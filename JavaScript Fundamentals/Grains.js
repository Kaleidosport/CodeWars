// Origin: https://www.codewars.com/kata/55f7eb009e6614447b000099

let square = (number) => number === 1 ? 1 : Math.pow(2, number - 1)

// *************** REFACTORED **************

let square = (number) => 2 ** (number - 1) // Since 2 ** 0 === 1...

/* Voted best practice: const square = n => 2 ** --n
 * 
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Decrement
 * 
 * --n works like n - 1
 */