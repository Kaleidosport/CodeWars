// Origin: https://www.codewars.com/kata/5467e4d82edf8bbf40000155

function descendingOrder(n){
  //...
  let result = n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  
  return parseInt(result);
}

/* Best solution:
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
*/