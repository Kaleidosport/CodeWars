// Origin: https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", 
                   "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    text = text.toLowerCase()
    let numericAlphabet = []

    for (let i = 0; i < alphabet.length; i++) {
      if (alphabet.indexOf(text[i]) > -1) numericAlphabet.push(alphabet.indexOf(text[i]) + 1)
    }

    return numericAlphabet.join(" ")
}

/** That one left a strong impression, tho:
 * function alphabetPosition(text) {
    return [...text].map(a => parseInt(a, 36) - 9).filter(a => a > 0).join(" ");
   }
 * Inspired by https://stackoverflow.com/questions/41427029/replace-a-letter-with-its-alphabet-position
 */