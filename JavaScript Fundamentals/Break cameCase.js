// Origin: https://www.codewars.com/kata/5208f99aee097e6552000148

// complete the function
function solution(string) {
    return string.split(/(?=[A-Z])/).join(" ");
}
// Basically from string to array thanks to RegEx and back to string

/* Most other solutions used string.replace(), like this one:

// complete the function
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

=> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n
*/