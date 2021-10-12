// Origin: https://www.codewars.com/kata/556deca17c58da83c00002db

function tribonacci(signature,n){
    //your code here
    let tribonacciArray = []

    if (n === 1) tribonacciArray = [signature[0]]
    else if (n === 2) tribonacciArray = [signature[0], signature[2]]
    else if (n === 0) tribonacciArray = []

    else {
        tribonacciArray.unshift(...signature)
        for (let i = 3; i < n; i++) tribonacciArray[i] = tribonacciArray[i-1] + tribonacciArray[i-2] + tribonacciArray[i-3]
    } 

    return tribonacciArray
}

/** What I wanted to get at:
 * 
 * function tribonacci(sign,n){
  for (var i = 3; i < n; i++) {
    sign[i] = sign[i-1] + sign[i-2] + sign[i-3];
  }
  return sign.slice(0, n);
  }
 *
 * Best practice:
 * 
 * function tribonacci(signature,n){  
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
  }
 *
 */