// Origin: https://www.codewars.com/kata/59df2f8f08c6cec835000012

let meeting = s => s.toUpperCase().split(";").map(a => a.split(":").reverse()).sort((b, c) => b[0] === c[0] ? b[1].localeCompare(c[1]) : b[0].localeCompare(c[0])).map(([d, e]) => `(${d}, ${e})`).join("")

// ************** REFACTORED **************

let meeting = s => s.toUpperCase().split(";").map(a => a.split(":").reverse()).sort().map(([d, e]) => `(${d}, ${e})`).join("")
// I'm glad I found out [an all-new way] to juggle with map()! LocaleCompare wasn't needed in the end, but it's cool to have gotten the gist of it.

/** Voted best practice, using a join(", ") right after reverse():
 * 
 * function meeting(s) {
  let string = s.toUpperCase().split(';')
                .map(x => x.split(':').reverse().join(', '))
                .sort()
                .join(')(')
  return '(' + string + ')'
 }
 * 
 * let meeting = s => Array.from(s.matchAll(/(\w+):(\w+)/g), m => `(${m[2]}, ${m[1]})`).sort().join('').toUpperCase()
 * 
 * Very smart solution using regex and replace():
 * 
 * const meeting = s => {
  return s.toUpperCase()
         .replace(/(\w+):(\w+)/g, "($2, $1)")
         .split(';')
         .sort()
         .join('')
 }
 * 
 */