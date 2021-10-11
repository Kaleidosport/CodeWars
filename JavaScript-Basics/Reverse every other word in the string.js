// Origin: https://www.codewars.com/kata/58d76854024c72c3e20000de

function reverse(str){
    //WRITE SOME MAGIC
    return str.trim().split(" ").map((value, index) => index % 2 !== 0 ? value.split("").reverse().join(``) : value).join(" ")
} // Adding .trim() was key here since there was a tricky test including an empty " " that had to return ""

/** Coolest solution outta the ladder, using template literals like me but better:
 * 
 * function reverse(string) {
  return string
    .split` `
    .map((w, i) => i & 1 ? [...w].reverse().join`` : w)
    .join` `
    .trim();
}
 *
 */