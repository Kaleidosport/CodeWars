// Origin: https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript

function findEvenIndex(arr)
{
  //Code goes here!
  let firstSum = 0;
  let secondSum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    firstSum += arr[i];
  }
  
  for (let i = 0; i < arr.length; i++) {
    firstSum -= arr[i];        
    if (firstSum === secondSum) return i;
    secondSum += arr[i];
  }
  return -1;
}

/* Best solution seems to be
const sum = (a, from, to) => a.slice(from, to).reduce((a, b) => a + b, 0)
const findEvenIndex = a => a.findIndex((el, i) => sum(a, 0, i) === sum(a, i + 1));
*/