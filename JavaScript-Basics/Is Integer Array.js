// Origin: https://www.codewars.com/kata/52a112d9488f506ae7000b95

let isIntArray = arr => Array.isArray(arr) && arr.every(a => ~~a === a)

/** Even shorter one:
 * 
 * let isIntArray = arr => !!arr && arr.every(Number.isInteger)
 * Reminder about !! => https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript
 * About Number.isInteger: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
 */