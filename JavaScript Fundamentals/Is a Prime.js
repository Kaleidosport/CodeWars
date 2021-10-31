// Origin: https://www.codewars.com/kata/56a194c4bd5032751e000029

function isPrime(str) {
    let primeList = ["Prime", "prime", 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 
                     37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
    return primeList.some(element => str.includes(element))    
  } // Failed to complete all the tests, only worked for 67% of those

/** Voted best practice:
 * 
 * return /prime/i.test(str) || (str.match(/\d+/g) || []).some(x => +x > 1  
 * && [...Array(+x)].every((_,p) => p < 2 || x % p)) 
 * 
 */