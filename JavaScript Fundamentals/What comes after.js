// Origin: https://www.codewars.com/kata/590f5b4a7bbb3e246000007d

function comes_after(str,l) {
    let string = ""
    for (let i = 0; i < str.length - 1; i++) {
      if (!str.includes(l.toUpperCase()) && !str.includes(l.toLowerCase()) || l === undefined) return ""
      else if (str[i] === l.toLowerCase() || str[i] === l.toUpperCase()) {
        string += str[i + 1].match(/[a-zA-Z]/) ? str[i + 1] : ""
      }
    }
    return string
}

/** Voted best practice:
 * 
 * const comes_after = (str, l) => {
  const reg = RegExp(l, 'i')
  const arr = str.split('')
  return arr.filter( (el, i) => i && reg.test(str[i-1]) && /[a-z]/i.test(el) ).join('')
 }
 * 
 */