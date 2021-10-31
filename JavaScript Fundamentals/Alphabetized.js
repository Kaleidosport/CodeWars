// Origin: https://www.codewars.com/kata/5970df092ef474680a0000c9

let alphabetized = (s) => s.replace(/[^a-zA-Z]/g, "").split("").sort((a, b) => (a.toUpperCase() === b.toUpperCase()) ? (s.indexOf(a) - s.indexOf(b)) : a.localeCompare(b)).join("")
// .replace(/\W/gi, "") was a close call
// Same goes for string.replace(/\s+/g, "").split("").sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1).join("")
// string.replace(/\s+/g, "").split("").sort((a, b) => a.localeCompare(b)).join("") as well