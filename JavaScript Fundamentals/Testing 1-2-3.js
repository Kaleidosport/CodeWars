// Origin: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9

let number = (array) => array.map((element, index) => `${(index + 1)}: ${(element)}`)

/** Well, for once, I got best practice and most clever right off the bat
 * 
 *  So, the loop way:
 * var number = function(arr) {
   var newArr = [];
   if (arr.length === 0) {
    return [];
   } else {
    for (var i = 0, len = arr.length; i < len; i += 1) {
      newArr.push((i + 1) + ': ' + arr[i]);
    }
  }
  return newArr;
  }
 * 
 * 
 */