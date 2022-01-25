// Origin: https://www.codewars.com/kata/5b39e91ee7a2c103300018b3

const removeConsecutiveDuplicates = s => s.split(" ").filter((x, i, a) => x != a[i + 1]).join(" ")

// ************** Noteworthy solution using regex ****************

const removeConsecutiveDuplicates = s => s.replace(/\b(\w+)(?: \1)+\b/g, '$1')