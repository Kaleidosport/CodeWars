// Origin:

function sortArray(array) {
    let bousin = []
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 1) bousin.push(array[i])
    }
    
    bousin = bousin.sort((a, b) => a - b)
    
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 === 1) {
        array.splice(j, 1, bousin[0])
        bousin.shift()
      } 
    }
    return array
} // Worked 50% of the time.

function sortArray(array) {
    let oddArray = array.filter(n => n % 2)
    oddArray.sort((a, b) => b - a)
    return array.map(n => n % 2 ? oddArray.pop() : n)
} // Victory! Reminder: n % 2 is the same as n % 2 !== 0, meaning it returns truthy values (1, 2...).

/** Voted most clever:
 * 
 * function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
  }
 * 
 * Voted best practice:
 * 
 * function sortArray(array) {
  var odds = [];
  //loop, if it's odd, push to odds array
  for (var i = 0; i < array.length; ++i) {
    if (array[i]%2 !== 0) {
      odds.push(array[i]);
    }
  }
  //sort odds from smallest to largest
  odds.sort(function(a,b){
    return a-b;
  });
  
  //loop through array, replace any odd values with sorted odd values
  for (var j = 0; j < array.length; ++j) {
    if (array[j]%2 !== 0) {
      array[j] = odds.shift();
    }
  }
  
 return array;
 }
 * 
 */