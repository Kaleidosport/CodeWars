// Origin: https://www.codewars.com/kata/543da2dd23ccbd1fb600048e

function sign(number) {
    if (isNaN(number)) return NaN
    else if (Number(number) > 0) return 1
    else if (Number(number) < 0) return -1
    else if (Number(number) === 0) return 0
} // Planned to use Math.sign(number) but this was disabled

/** Voted best practice:
 *  function sign(n){
  // ...
  if (n < 0) 
    return -1;
  else if (n == 0)
    return 0;
  else if (n > 0)
    return 1;
  else
    return NaN
  }
 * 
 * Voted most clever:
 * return n > 0 ? 1 : n == 0 ? 0 : n < 0 ? -1 : NaN
 * 
 * Also:
 * return isNaN(n) ? NaN : !+n ? 0 : n < 0 ? -1 : 1
 * 
 * Noteworthy:
 * function sign(number){
  var num = Number(number);
  if (num > 0) return 1;
  if (num < 0) return -1;
  if (num == 0) return 0;
  return NaN;
  }
 * 
 * 
 */