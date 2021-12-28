// Origin: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1

let duplicateCount = (text) => ([...text.toLowerCase()].sort().join("").match(/([^])\1+/g) || []).length

// ************** REFACTORED **************

let duplicateCount = (text) => ([...text].sort().join("").match(/([^])\1+/gi) || []).length

/** Regex explained @ https://regex101.com/r/MgERCZ/1 :
 * 
 * /([^])\1+/ => 1st capturing group
 * [^] matches any character, including newline
 * \1 matches the same text as most recently matched by the 1st capturing group
 * + matches the previous token between one and unlimited times, as many times as possible, giving back as needed (greedy)
 * gi => Global pattern flags
 * g modifier: global. All matches (don't return after first match)
 * i modifier: insensitive. Case insensitive match (ignores case of [a-zA-Z]) => toLowerCase() was no more needed thanks to this guy
 * 
 * => + was key to solve the issue I encountered when trying to solve the kata without regex while g allow to go further than the 1st match
 */