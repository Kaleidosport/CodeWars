// Origin: https://www.codewars.com/kata/546e2562b03326a88e000020

const squareDigits = (num) => parseInt(num.toString().split("").map(num => parseInt(num)).map(num => Math.pow(num, 2)).join(""));

/* Reminder: array.map creates a new array populated with the results of calling a provided function on every element in the calling array

I first came up with this solution, prior to refactoring and rethinking:
function squareDigits(num) {
    var numString = num.toString();
    var numSquares = [];
    for (var i = 0; i < numString.length; i++){
        numSquares[i] = Math.pow(numString[i], 2);
    }
    return Number(numSquares.join(""));
}
*/