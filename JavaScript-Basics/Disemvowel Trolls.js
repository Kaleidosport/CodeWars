// Origin: https://www.codewars.com/kata/52fba66badcd10859f00097e

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, "");
  }

/* New method acquired: https://www.w3schools.com/jsref/jsref_replace.asp
 * /g would have made it global (not just the first instance of [aeiou])
 * /gi makes it global AND case-insensitive ([AEIOU] included)
*/