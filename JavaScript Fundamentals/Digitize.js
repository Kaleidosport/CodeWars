// Origin: https://www.codewars.com/kata/5417423f9e2e6c2f040002ae

let digitize = n => [...n.toString()].map(a => +a)

// ************** REFACTORED **************

let digitize = n => [...String(n)].map(Number)