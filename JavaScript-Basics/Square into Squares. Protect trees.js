// Origin: https://www.codewars.com/kata/54eb33e5bc1a25440d000891/javascript

const chai = require("chai");
const assert = chai.assert;

describe("decompose",function() {
  function tot(arr, n) {
    var res = arr.reduce(function(sum, c) { c = Math.trunc(c); return sum + c * c; }, 0);
    return res === n * n;
  }
  function is_sorted(arr) {
      if (arr.length < 2) return false;
      if ((arr[0] == 0) || (arr[1] == 0)) return false;
      for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i] >= arr[i+1]) {
              return false;
          }
      }
      return true;
  }
  function testing(n, exp) {
    var ans = decompose(n);
    var success = false;
    var sans = JSON.stringify(ans);
    var sexp = JSON.stringify(exp);
    console.log("Expected: " + sexp +  "\nGot: " + sans);
    if (sans == sexp) {
        success = true;
    } else {
        if (ans === null) {
            success = false;
        } else {
            var st = is_sorted(ans);
            var t = tot(ans,n);
            console.log("Sorted: " + st + " Total: " + t);
            if ((st === false) || (t === false)) {
                console.log("Not increasinly sorted or bad sum of squares")
                success = false;
            }
            else success = true;
        }
    }
    assert.equal(success, true)
  }

it("Basic tests",function() {
    testing(50, [1,3,5,8,49]);
    testing(12, [1,2,3,7,9]);
    testing(44, [2,3,5,7,43]);
    testing(625, [2,5,8,34,624]);
    testing(5, [3,4]);
    
})})

function decompose(n) {
    // your code
    let N = n * n;
    let nArray = [];
    let squareSum =  0;

    for (let i = 0; i < n; i++) {
        nArray.push(i * i);
    }

    if (nArray.reduce() === N) return nArray;
    else if (nArray.reduce() <= 0 || n === 0) return null;
    else {
        for (let j = nArray.length; j > 0; j--) {
            squareSum += nArray[j];
            if (squareSum === N) {
                
            }
        }
    }
}

/* https://dev.to/thepracticaldev/daily-challenge-14-square-into-squares-ohp
Also think of checking and using array.reduce() and array.reverse()
*/