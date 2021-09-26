// Origin: https://www.codewars.com/kata/52efefcbcdf57161d4000091/javascript

function count (string) {  
    // The function code should be here
    const charactersIterations = {};
    
    for (let character of string) {
      if (charactersIterations.hasOwnProperty(character)) {
          // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
        charactersIterations[character] += 1;
      }
      else {
        charactersIterations[character] = 1;
      }
    }
     return charactersIterations;
}

/* Another solution, this time using Array.forEach():
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

A last one making use of Array.reduce():
function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}
*/