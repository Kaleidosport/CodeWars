// Origin: https://www.codewars.com/kata/5264d2b162488dc400000001

let spinWords = (string) => string.split(" ").map(characters => characters.length > 4 ? characters.split("").reverse().join("") : characters).join(" ")
// From string to array to editing as required (length > 4 & reverse) and back to string

/** Voted best practice:
 * 
 * function spinWords(words){
     return words.split(' ').map(function (word) {
        return (word.length > 4) ? word.split('').reverse().join('') : word;
     }).join(' ');
   }
 * 
 * Voted most clever:
 * 
 * let spinWords = (string) => string.replace(/\w{5,}/g, (w) => w.split('').reverse().join(''))
 * 
 * /\w{5,}/g was an interesting move, gotta keep this one in mind
 * 
 */