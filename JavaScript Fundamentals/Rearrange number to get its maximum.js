// Origin: https://www.codewars.com/kata/563700da1ac8be8f1e0000dc

let maxRedigit = (num) => num > 99 && num < 1000 ? +([...num.toString()].sort((a, b) => a < b).join("")) : null