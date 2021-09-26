// Origin: https://www.codewars.com/kata/5949481f86420f59480000e7

function oddOrEven(arr) {
    return arr.reduce((a, b) => a + b, 0) % 2 ? "odd" : "even";
    // return arr.reduce(function(a, b) { return a + b }, 0) % 2 ? "odd" : "even";
  }

/* Syntax reminder: [0, 1, 2, 3, 4].reduce(function(accumulateur, valeurCourante, index, array){
  return accumulateur + valeurCourante;
}, 10); from https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

Other cool solution, this time using Math.abs():
const oddOrEven=arr=>["even","odd"][Math.abs(arr.reduce((a,b)=>a+b,0))%2];
*/
