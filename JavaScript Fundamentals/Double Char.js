// Origin: https://www.codewars.com/kata/56b1f01c247c01db92000076

let doubleChar = (str) => [...str].map(a => a + a).join("")

/** Best practice and most clever from the start, hurray /ô/
 * 
 * I like that one too, tho:
 * let doubleChar = (str) => str.replace(/(.)/g, "$1$1")
 * 
 * Again with this $1 /!\
 */