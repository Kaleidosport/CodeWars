// Origin: https://www.codewars.com/kata/54d4c8b08776e4ad92000835

var isPP = function(n) {
    for (let i = 2; i ** 2 <= n; i++) {
      for (let j = 2; Math.pow(i, j) <= n; j++) {
        if (Math.pow(i, j) === n) return [i, j]
      }
    }
    return null
}

/** Pretty damn close from best practice and most clever, only syntax made a difference:
 * 
 * function isPP(n) {
  for (var m = 2; m * m <= n; ++ m)
    for (var k = 2; Math.pow(m, k) <= n; ++ k)
      if (Math.pow(m, k) == n) return [m, k]
  return null
  }
 * 
 * Noteworthy solution making use of Math.log():
 * 
 * var isPP = function(n){
  for (var m = 2; m <= Math.floor(Math.sqrt(n)); ++m) {
    var k = Math.round(Math.log(n) / Math.log(m))
    if (Math.pow(m, k) == n) return [m, k];
  }
  return null;
  }
 * 
 * I felt like I was on to something with [...Array(n).keys()].slice(2) but failed to deliver 
 * 
 */