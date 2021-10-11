// Origin: https://www.codewars.com/kata/552c028c030765286c00007d

function iqTest(numbers){
    //
    numbers = numbers.split(" ").map(function(element) {return parseInt(element)})
    let evenNumbers = []
    let oddNumbers = []

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 1) oddNumbers.push(numbers[i])
      else if (numbers[i] % 2 === 0) evenNumbers.push(numbers[i])
    }

    if (evenNumbers.length === 1) return (numbers.indexOf(evenNumbers[0]) + 1)
    else if (oddNumbers.length === 1) return (numbers.indexOf(oddNumbers[0]) + 1)
}

/** Same idea but cleaner and voted best practice:
 * 
 * function iqTest(numbers){
  numbers = numbers.split(" ").map(function(el){return parseInt(el)});
  
  var odd = numbers.filter(function(el){ return el % 2 === 1});
  var even = numbers.filter(function(el){ return el % 2 === 0});
  
  return odd.length < even.length ? (numbers.indexOf(odd[0]) + 1) : (numbers.indexOf(even[0]) + 1);
}
 *
 * Noteworthy as well:
 * 
 * function iqTest(numbers){
  var nums = numbers.split(" ").map(x => x % 2);  
  var sum = nums.reduce((a,b) => a + b);  
  var target = sum > 1 ? 0 : 1;
  
  return nums.indexOf(target) + 1;
}
 *
 */