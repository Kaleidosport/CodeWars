// Origin: https://www.codewars.com/kata/54da539698b8a2ad76000228

// /!\ I first went with the following but it didn't sit good with some inputs mixing n, e, w and s /!\

function isValidWalk(walk) {
    // walk = walk.sort() This didn't work out either since order matters in this kinda kata
    if (walk.length === 10) {
      for (let i = 0; i < walk.length; i++) {
        if (walk[i].concat(walk[walk.length - i]) === "ns" || walk[i].concat(walk[walk.length - i]) === "sn" || walk[i].concat(walk[walk.length - i]) === "we" || walk[i].concat(walk[walk.length - i]) === "ew") {
          return true
        }
      }
    }
    return false
} // As a result, it made it clear I had to count n, e, w and s to complete this kata

function isValidWalk(walk) {
    const NORTH = walk.filter(direction => direction === "n").length
    const EAST = walk.filter(direction => direction === "e").length
    const WEST = walk.filter(direction => direction === "w").length
    const SOUTH = walk.filter(direction => direction === "s").length

    return walk.length === 10 && NORTH === SOUTH && EAST === WEST
} // I came up with this to count n, e, w and s while taking into account the only accepted length

/** Voted most clever, kinda like a shorter version of my solution:
 * 
 * function isValidWalk(walk) {
      function count(val) {
        return walk.filter(function(a){return a==val;}).length;
      }
      return walk.length==10 && count('n')==count('s') && count('w')==count('e');
    }
 * 
 * Voted best practice:
 * 
 * function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length
  
  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }
  
  return dt === 10 && dx === 0 && dy === 0
 }
 * 
 *  Interesting thinking out there, especially the use of {object}[index] inside .reduce():
 * 
 * function isValidWalk(walk) {
    return walk.length == 10 && !walk.reduce(function(w,step){ return w + {"n":-1,"s":1,"e":99,"w":-99}[step]},0)
   }
 */