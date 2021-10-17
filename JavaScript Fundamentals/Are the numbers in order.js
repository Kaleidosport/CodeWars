// Origin: https://www.codewars.com/kata/56b7f2f3f18876033f000307

function inAscOrder(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) return false
    }
    return true
}

/** Noteworthy alternatives:
 * 
 * let inAscOrder = (arr) => arr.every((_,i)=>i==0||arr[i]>arr[i-1])
 * 
 * let inAscOrder = (arr) => arr.slice(1).every((x, i) => x >= arr[i])
 * 
 * const inAscOrder = arr => arr.join("") === arr.sort((a, b) => a - b).join("")
 * 
 */