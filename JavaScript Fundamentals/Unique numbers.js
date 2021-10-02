// Origin: https://www.codewars.com/kata/568f9bd9cbe89334c900000c

function uniqueNumbers(numbersArray) {
    //you must return unique numbers array
  let uniqueNumbers = Array.from(new Set(numbersArray))
  return uniqueNumbers
}

/** Kinda easy with new Set() method which removes duplicates
 * Even shorter thanks to spread operator:
 * const uniqueNumbers = numbers => [...new Set(numbers)];
 */