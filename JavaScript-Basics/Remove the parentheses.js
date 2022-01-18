// Origin: https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8

function removeParentheses(s) {
    let newS = ""
    let count = 0
    for (let i = 0; i < s.length; i++) { // Or for (let char of s), then char instead of s[i]
      if (s[i] === "(") count ++
      if (count === 0) newS += s[i]
      if (s[i] === ")") count--
    }
    return newS
}

/** Voted most clever:
 * const removeParentheses = s => s.includes('(') ? removeParentheses(s.replace(/\([^()]*?\)/, '')) : s
 * Nice way to avoid replaceAll()'s withdrawal by the kata's author
 * 
 * function removeParentheses(s){
  while (s.match(/\([\w ]+\)/g)) {
    s = s.replace(/\([\w ]+\)/g ,'');
  }
  return s;
}
 * 
 */