// Origin: https://www.codewars.com/kata/5d50e3914861a500121e1958

const addLetters= (...letters) => String.fromCharCode(letters.reduce((sum, v) => sum + v.charCodeAt() - 96, 25) % 26 + 97)

/** Adding up all letters'charcodes, then -96 converts said charcodes to positions in the alphabet
 * + 25 allows to handle multiples of 26 once % 26 is called
 * % 26 allows to loop through the alphabet
 * Back to letter charcode thanks to + 97
 * String. returns a string from the whole charcode thing
 */