// Origin: 

//return the total number of smiling faces in the array
function countSmileys(arr) {
    let validSmileys = [];
    for (i = 0; i < arr.length; i++) {
      if (/(\:|\;)(\~|\-)?(\)|[D])/.test(arr[i])) {
          // Don't have to specify the {amount} of chars when written down this way
        validSmileys.push(arr[i]);
      }
    }
    return validSmileys.length;
  }

/* RegEx was key here to make use of .test() but there's an even cleaner solution with arr.filter():
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}
array.filter() creates a new array with all elements THAT PASS THE TEST implemented by the provided function
*/