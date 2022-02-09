// Origin: https://www.codewars.com/kata/558fc85d8fd1938afb000014

function sumTwoSmallestNumbers(numbers) {  
    let sortedNumbers = numbers.sort((a, b) => a - b)
    return sortedNumbers[0] + sortedNumbers[1]
}