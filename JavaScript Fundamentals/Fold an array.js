// Origin: https://www.codewars.com/kata/57ea70aa5500adfe8a000110

function foldArray(array, runs)
{
  let folded = []

  while (array.length > 1) {
      folded.push(array[0] + array[array.length - 1])
      array = array.slice(1, array.length - 1)
  }
  if (array.length > 0) folded.push(array[0])

  if (runs > 1) return foldArray(folded, runs--)
  
  return folded
}

// ********************* REFACTORED *********************

function foldArray(array, runs)
{
  let folded = []
  let Array = array.slice()

  while (Array.length > 0) folded.push(Array.pop() + (Array.shift() || 0))

  return (runs > 1) ? foldArray(folded, runs - 1) : folded
}

/** Voted most clever:
 * 
 * function foldArray(a, n) {
  const r = [], c = a.slice();
  while (c.length) r.push(c.pop() + (c.shift() || 0));
  return n - 1 ? foldArray(r, n - 1) : r;
  }
 * 
 * while (c.length) is the same as while (c.length > 0)
 * Oddly enough, pop() & shift() didn't work for me, hence why I used array[0] & array[array.length - 1]
 * I take it the initial array.slice becoming a variable (c) makes the trick
 * 
 * I kinda like that one too:
 * 
 * function foldArray (array, runs) {
    let arrayToFold = Array.from(array);
    while (runs > 0) {
        let resultArray = [];
        while (arrayToFold.length > 1) {
            let firstElement = arrayToFold.shift();
            let lastElement = arrayToFold.pop();
            resultArray.push(firstElement + lastElement);
        }
        arrayToFold = [...resultArray, ...arrayToFold];
        runs--;
    }
    return arrayToFold;
  };
 *
 * One-liner:
 * const foldArray = (array, runs) =>
   runs-- ? foldArray([...[...Array(array.length >> 1)].map((_, idx) => array[idx] + array[array.length - idx - 1]), ...array.length % 2 ? [array[array.length >> 1]] : []], runs) : array
 * 
 */