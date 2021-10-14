// Origin: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c

return word.toLowerCase().split("").map((char, index, Word) => Word.indexOf(char) === Word.lastIndexOf(char) ? "(" : ")").join("")

/** Voted best practice & most clever:
 * 
 * function duplicateEncode(word){
    return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
   }
 * 
 * Another solution, this time using .replace():
 * 
 * function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.toLowerCase().replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
   }
 * 
 */