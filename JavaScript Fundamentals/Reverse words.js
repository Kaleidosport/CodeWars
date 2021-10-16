// Origin: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

let reverseWords = (str) => str.split("").reverse().join("").split(" ").reverse().join(" ")

/** Other method, voted best practice:
 * 
 * str.split(" ").map(word => word.split("").reverse().join("")).join(" ")
 * 
 * Same result using spread operator [...word] instead of word.split("") since it returns the same thing:
 * let reverseWords = (str) => str.split(" ").map(word => [...word].reverse().join("")).join(" ")
 * 
 */