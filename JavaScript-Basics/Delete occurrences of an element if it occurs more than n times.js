// Origin: https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n) {
    let results = []
    for (let i = 0; i < arr.length; i++) {
    if (count(results, arr[i]) < n) {
      results.push(arr[i])
    }
  }
  return results
}
  
function count(array, what) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
      if (array[i]===what) {
        count++
      }
    }
    return count
}

/**
 * Voted best practice:
 * 
 * function deleteNth(arr,x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n]||0) + 1;
    return cache[n] <= x;
  });
 }
 * 
 * Voted most clever:
 * 
 * const deleteNth = (arr,x) => arr.filter((e,i)=> arr.slice(0,i).filter(f=>f== e).length < x );
 */