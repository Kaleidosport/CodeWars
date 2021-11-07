// Origin: https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9

function upArray(arr) {
    let tooBig = (element) => element >= 10
    let tooSmall = (element) => element < 0
    if (arr.findIndex(tooBig) !== -1 || arr.findIndex(tooSmall) !== -1 || arr.length === 0) return null
    // findIndex(element) !== - 1 means "this exists since it doesn't not have an index" ;)
    else if (arr[arr.length - 1] < 9) {
      arr[arr.length - 1] += 1
    }
    
    else if (arr[arr.length - 1] === 9 && arr[arr.length - 2] < 9) {
      arr[arr.length - 1] = 0
      arr[arr.length - 2] += 1
    }
    
    else if (arr[arr.length - 1] === 9 && arr[arr.length - 2] === 9 && arr[arr.length - 3] < 9) {
      arr[arr.length - 1] = 0
      arr[arr.length - 2] = 0
      arr[arr.length - 3] += 1
    }
    
    else if (arr[arr.length - 1] === 9 && arr[arr.length - 2] === 9 && arr[arr.length - 3] === 9) {
      arr[arr.length - 1] = 0
      arr[arr.length - 2] = 0
      arr[arr.length - 3] = 0
      arr.unshift(1)
    }
    
    return arr
} // Not clean at all, will have to redo it in a few weeks

/** Voted best practice:
 * 
 * function upArray(arr) {


    if ((typeof arr === 'undefined') || (arr === null) || (arr.length === 0)) {
        return null;
    }

    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] < 0) || (typeof arr[i] !== 'number') || (arr[i] > 9)) {
            return null;
        }
    }
    // if its 9 and more than one digit we have to check all previous digits
    // whether they are also a 9
    for (var j = arr.length - 1; j > -1; j--) {

        if (arr[j] !== 9) {
            arr[j] = arr[j] + 1;
            break;
        } else {
            arr[j] = 0;
        }

        if (j === 0) {
            arr.unshift(1);
        }
    }


    return arr;
 }
 * 
 * Voted most clever, using imported library:
 * 
 * const BigNumber = require('bignumber.js');

 const upArray = arr =>
  arr.length === 0 || arr.filter(x => x < 0 || x > 9).length > 0
    ? null
    : (new BigNumber(arr.join('')).plus(1))
        .toPrecision()
        .split('')
        .map(Number);
 * 
 * Noteworthy, closer to my thinking and what I wanted to get at:
 * 
 * function upArray(arr) {
  if (arr.length == 0 || arr.some(e => e < 0 || e > 9)) return null
  
  let i = arr.length - 1
  
  while (i >= 0 && arr[i] == 9)
    arr[i--] = 0
  
  if (i < 0)
    arr.unshift(1)
  else
    arr[i]++
  
  return arr
 }
 * 
 * Array.some() does exactly what I was looking for, just like arr[i--]...
 */