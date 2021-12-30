// Origin: https://www.codewars.com/kata/57a62154cf1fa5b25200031e

let alternateCase = s => [...s].map(a => a.charCodeAt(0) > 64 && a.charCodeAt(0) < 91 ? a.toLowerCase() : a.charCodeAt(0) > 96 && a.charCodeAt(0) < 123 ? a.toUpperCase() : a).join("")

/** Smart & simple:
 * 
 * let alternateCase = s => [...s].map(x => x == x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
 * 
 * Using replace():
 * 
 * s.replace(/([a-z])|[A-Z]/g,(a,b)=>b?a.toUpperCase():a.toLowerCase())
 * const alternateCase = str => str.replace(/./g, ch => ch[`to${/[A-Z]/.test(ch) ? 'Low' : 'Upp'}erCase`]())
 * s.replace(/\w/g, val => val[`to${val < `a` ? `Low` : `Upp`}erCase`]())
 * 
 */