// Origin: https://www.codewars.com/kata/514b92a657cdc65150000006

let solution = (number) => {
    if (number < 0) return 0
    else {
      number--
      return 3 * ~~(number / 3) * (~~(number / 3) + 1) / 2
      + 5 * ~~(number / 5) * (~~(number / 5) + 1) / 2
      - 15 * ~~(number / 15) * (~~(number / 15) + 1) / 2
    }
} // Merci aux cours de statistiques /ô/ & to ~~ unary operator (double NOT), acting like parseInt or Math.round

/** Voted best practice:
 * 
 * function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
  }
 * 
 * Well done since loop starts at i = 1, which renders if (number <= 0) return 0 useless
 * 
 * One-liner:
 * let solution = (n) => n<=0?0:Array.from({length: n}, (_,i) => (i%3==0||i%5==0)?i:0).reduce((x,y)=>x+y)
 * 
 * Another one:
 * return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b)
 * 
 */