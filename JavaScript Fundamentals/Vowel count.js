// Origin: https://www.codewars.com/kata/54ff3102c1bad923760001f3

let getCount = (str) => str.match(/[aeiou]/gi) ? str.match(/[aeiou]/gi).length : 0

// *************** REFACTORED ***************

let getCount = (str) => (str.match(/[aeiou]/gi) || []).length

/** Best practice and most clever, at least after refactoring /ô/
 * 
 * Noteworthy solution:
 * return str.replace(/[^aeiou]/gi, "").length
 */