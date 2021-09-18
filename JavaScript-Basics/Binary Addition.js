// Origin: https://www.codewars.com/kata/551f37452ff852b7bd000139

function addBinary(a,b) {
    return (a + b).toString(2);
  }

/* New method acquired: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
 * toString(base) (or toString(radix) according to other sources) was key here
 * Base (or radix) 2 means the number will be returned as a string representation of a binary number
 * Base (or radix) 10 would have returned a string representation of a decimal number
 * No base (or radix) returns a string representation of a decimal number by default
 * Other useful source: https://www.techonthenet.com/js/number_tostring.php
*/