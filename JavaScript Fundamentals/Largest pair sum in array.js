// Origin: https://www.codewars.com/kata/556196a6091a7e7f58000018

function largestPairSum (numbers) {
    return numbers.sort((a, b) => a - b).reverse()[0] + numbers.sort((a, b) => a - b).reverse()[1]
}

// ************** Same as a one-liner ****************

let largestPairSum = numbers => numbers.sort((a, b) => b - a)[0] + numbers.sort((a, b) => b - a)[1]