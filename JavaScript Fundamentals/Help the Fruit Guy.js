// Origin: https://www.codewars.com/kata/557af4c6169ac832300000ba

let removeRotten = (bagOfFruits) => (bagOfFruits || []).map(fruit => fruit.match(/^rotten/) ? fruit.slice(6).toLowerCase() : fruit)
// ********************************* OR ********************************
let removeRotten = (bagOfFruits) => bagOfFruits ? bagOfFruits.map(fruit => fruit.replace(/^rotten/g, "").toLowerCase()) : []

// .includes("rotten") would have worked as weel instead of .match(/^rotten/)
// Got best practice and most clever from the start, hurray