// Origin: https://www.codewars.com/kata/525d50d2037b7acd6e000534

Array.prototype.square = function () {
    return this.map(number => {return number ** 2})
}

Array.prototype.cube = function () {
    return this.map(number => {return number ** 3})
}

Array.prototype.sum = function () {
    return this.length === 0 ? 0 : this.reduce((i, j) => {return i + j})
}

Array.prototype.average = function () {
    return this.length === 0 ? NaN : this.reduce((i, j) => {return i + j}) / this.length
}

Array.prototype.even = function () {
    return this.filter(i => {return i % 2 === 0})
}

Array.prototype.odd = function () {
    return this.filter(i => {return i % 2 === 1})
}

/** Syntax was the real challenge throughout this kata, hence best practice:
 * 
 * Array.prototype.square  = function () { return this.map(function(n) { return n*n; }); }
   Array.prototype.cube    = function () { return this.map(function(n) { return n*n*n; }); }
   Array.prototype.average = function () { return this.sum() / this.length; }
   Array.prototype.sum     = function () { return this.reduce(function(a, b) { return a + b; }, 0); }
   Array.prototype.even    = function () { return this.filter(function(item) { return 0 == item % 2; }); }
   Array.prototype.odd     = function () { return this.filter(function(item) { return 0 != item % 2; }); }
 *
 */