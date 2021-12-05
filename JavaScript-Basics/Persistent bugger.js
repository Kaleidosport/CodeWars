// Origin: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
    let amount = 0
    while (num > 9) {
      let intermediary = [...num.toString()]
      num = intermediary.reduce((x, y) => (x *= y))
      amount++
    }
    return amount
}

/** Kinda different, yet similar...though different:
 * 
 * function persistence(num) {
   var times = 0;
   
   num = num.toString();
   
   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }
   
   return times;
 }
 * 
 * Odd one-liner:
 * persistence=(n,c)=>n>9?persistence(n.toString().split('').reduce((x,y)=>x*y),c?(c+1):1):c?c:0
 * 
 */