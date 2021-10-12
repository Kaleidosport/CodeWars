// Origin: https://www.codewars.com/kata/5878520d52628a092f0002d0

function stringTransformer(str) {
    // Your code here
    str.split(" ")
       .map(letter => letter.replace(/./gi, letter => { // . means any character except line break while gi performs a case insensitive search on all occurrences
           if (letter === letter.toUpperCase()) letter.toLowerCase()
           else if (letter === letter.toLowerCase()) letter.toUpperCase()
       })).reverse().join(" ")
}

/** One-liner:
 * 
 * stringTransformer=a=>a.split` `.reverse().map(a=>a.split``.map(a=>/[a-z]/.test(a)?a.toUpperCase():a.toLowerCase()).join``).join` `
 * 
 * Voted best practice:
 * 
 * function stringTransformer(str) {
  return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(v => v == v.toUpperCase() ?
      v.toLowerCase() :
      v.toUpperCase())
    .join('');
  }
 *
 */