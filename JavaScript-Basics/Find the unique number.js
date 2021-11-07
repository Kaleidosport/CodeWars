// Origin: https://www.codewars.com/kata/585d7d5adb20cf33cb000235

let findUniq = (arr) => Number(arr.filter((number, index, array) => array.indexOf(number) === array.lastIndexOf(number)))

// ************** REFACTORED **************

let findUniq = (arr) => +(arr.filter((number, index, array) => array.indexOf(number) === array.lastIndexOf(number)))

/** Voted best practice and most clever:
 * 
 * function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
  }
 * 
 * Noteworthy, gotta think of using .find() too:
 * 
 * function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
  }
 * 
 */