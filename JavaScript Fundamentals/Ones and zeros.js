// Origin: https://www.codewars.com/kata/578553c3a1b8d5c40300037c

const binaryArrayToNumber = arr => parseInt(...arr.join("").split(), 2)

// ************** REFACTORED **************

const binaryArrayToNumber = arr => parseInt(arr.join(""), 2)

/** Interesting alternatives:
 * 
 * arr.reduce( (a, b) => a << 1 | b )
 * 
 * Assuming you know how reduce and arrow functions work, << is the bitwise left shift operator, and | is the bitwise OR operator. Bitwise operations in JavaScript convert all numbers to 32-bit signed integers, so this wouldn't work on numbers greater than 2,147,483,647.

Anyway, as an example, take the number 42. The Array passed in to our function will be [1, 0, 1, 0, 1, 0].

Reduce operates from left to right, and since we didn't specify a starting value for the accumulator, it will just be the left-most element in the Array, or 1. Bitwise operation has left-to-right associativity, and also << has a higher precedence than |, so the << is processed before the |.

So then we have:

Operation         Accumulator    Remaining Array
=========         ===========    ===============
none              1              [0, 1, 0, 1, 0]
1 << 1 | 0        10             [1, 0, 1, 0]
10 << 1 | 1       101            [0, 1, 0]
101 << 1 | 0      1010           [1, 0]
1010 << 1 | 1     10101          [0]
10101 << 1 | 0    101010         []

Reduce will return the 32-bit signed integer which is stored in memory as the bits 101010, or 42.
 * 
 * arr.reduce((a,b)=>a*2+b)
 * 
 */