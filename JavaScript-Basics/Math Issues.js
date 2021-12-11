// Origin: https://www.codewars.com/kata/5267faf57526ea542e0007fb

Math.round = function(number) {
    return number.toString().slice(number.toString().indexOf(".") + 1).length === 1 && number.toString().indexOf(".") === -1 ? number : (number.toString().slice(number.toString().indexOf(".") + 1)).slice(0, 1) >= 5 ? Number(number.toString().substring(0, number.toString().indexOf("."))) + 1 : Number(number.toString().substring(0, number.toString().indexOf(".")))
}
  
Math.ceil = function(number) {
    return number.toString().substring(0, number.toString().indexOf(".")) != "" ? Number(number.toString().substring(0, number.toString().indexOf("."))) + 1 : number
}
  
Math.floor = function(number) {
    return number.toString().slice(number.toString().indexOf(".") + 1).length === 1 && number.toString().indexOf(".") === -1 ? number : Number(number.toString().substring(0, number.toString().indexOf(".")))
}

// ********************* Alternative using double bitwise operator ~~ *********************

Math.round = number => number % 1 >= .5 ? ~~(number + 1) : ~~number

Math.ceil = number => number % 1 > 0 ? ~~number + 1 : number

Math.floor = number => ~~number

/** Voted best practice, though I thought parseInt() was a no-go:
 * 
 * Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};
 * 
 * Clever, neat one:
 * 
 * //unlike bitwise operators, this works for x >= 2147483648
Math.floor = function floor(x){
   return x - x % 1; 
}
//function calls are expensive, so...
Math.round = function round(x){
   return (x + 0.5) - (x + 0.5) % 1;
}
Math.ceil = function ceil(x){
   return x - x % 1 + !!(x % 1);
}
 * 
 * Using Math.floor as a pivot once defined:
 * 
 * Math.floor = number => parseInt(number)
   Math.round = number => Math.floor(number + 0.5)
   Math.ceil  = number => Number.isInteger(number) ? number : Math.floor( number + 1 )
 * 
 * Close enough to my thinking:
 * 
 * Math.round = function(number) {
  number = number.toString();
  number = number.split('.');
  number[1] = '.' + number[1];
  if (number[1] >=.5) return parseInt(number[0])+1;
  else return parseInt(number[0]);
}

Math.ceil = function(number) {
  number = number.toString();
  number = number.split('.');
  if (number[1] === undefined) return parseInt(number[0]);
  return parseInt(number[0])+1;
}

Math.floor = function(number) {
  number = number.toString();
  number = number.split('.');
  return parseInt(number[0]);
}
 * 
 * Still surprised this was ranked as a 5kyu kata. ☃
 * 
 */