// Origin: https://www.codewars.com/kata/545cedaa9943f7fe7b000048

function isPangram(string) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  string = string.toLowerCase()
  for (let i = 25; i > -1; i--) {
    if (string.includes(alphabet[i])) alphabet.pop()
    else break
  }
  return alphabet.length === 0
}

/** Voted most clever and best practice:
 *
 * function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
 *
 * function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
 *
 * function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
 *
 */