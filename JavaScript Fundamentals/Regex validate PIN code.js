// Origin: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132

function validatePIN (pin) {
    //return true or false
    return /^(\d{4}|\d{6})$/.test(pin)
  }

// RegExp.test() strikes again, just had to learn RegEx syntax with the help of https://www.geeksforgeeks.org/write-regular-expressions/