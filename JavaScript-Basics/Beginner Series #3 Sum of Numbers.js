// Origin: https://www.codewars.com/kata/55f2b110f61eb01779000053/javascript

function getSum( a,b )
{
   //Good luck!
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

/* https://en.wikipedia.org/wiki/Arithmetic_progression#Sum
An even shorter solution: 
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/abs

Another cool one:
function GetSum( a,b )
{
  tmp = 0;
  
  if(a < b)
    while(a <= b) tmp += a++;
  else
    while(a >= b) tmp += a--;
      
  return tmp;
}
*/