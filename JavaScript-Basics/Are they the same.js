// Origin: https://www.codewars.com/kata/550498447451fbbd7600041c

let comp = (array1, array2) => array1 == null || array2 == null || array1.length != array2.length ? false : array1.every(e => array2.includes(e * e)) ? true : false
// Felt cool to me but only solves 163 inputs out of 214, includes() proving lackluster here.

let comp = (array1, array2) => array1 == null || array2 == null || array1.length != array2.length ? false : array1.sort((a, b) => a < b).every((e, i) => e * e === array2.sort((a, b) => a < b)[i]) ? true : false
// Thought sort() would help improve it, but it solves even less inputs. Oddly enough, it works on fiddle tho.

let comp = (array1, array2) => array1 == null || array2 == null || array1.length != array2.length ? false : array1.map(n => n * n).sort().join() === array2.sort().join() ? true : false
// Bouncing back after 34 minutes of struggle, I came up with this solution using map() and join() instead of every(). Yatta!


/** Was very close to the one voted most clever in the end:
 * 
 * !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join()
 * => About "!!": it's short way to cast a variable to be a boolean (true or false) value
 * More on this: https://betterprogramming.pub/javascript-bang-bang-i-shot-you-down-use-of-double-bangs-in-javascript-7c9d94446054
 * 
 * Using every(), some() and delete, which could come in handy next time since it's what I lacked at first:
 * 
 * !!array2 && !!array1 && array2.every( a=> array1.some( (b,i)=> a===b*b && delete array1[i] ) )
 * 
 * Voted best practice:
 * 
 * function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
 }
 * 
 */