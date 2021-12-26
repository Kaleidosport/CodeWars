// Origin: https://www.codewars.com/kata/511f11d355fe575d2c000001

let twoOldestAges = (ages) => [ages.sort((a, b) => a - b)[ages.length - 2], ages.sort((a, b) => a - b)[ages.length - 1]]

// ************** OR ***************

let twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2)