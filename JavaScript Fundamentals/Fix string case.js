// Origin: https://www.codewars.com/kata/5b180e9fedaa564a7000009a

function solve(s){
    let lowerAmount = [...s].filter(char => char.match(/[a-z]/)).length
    let upperAmount = [...s].filter(char => char.match(/[A-Z]/)).length
    return upperAmount > lowerAmount ? s.toUpperCase() : s.toLowerCase()
}

/** Voted best practice:
 * 
 * function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
  }
 * 
 * Voted most clever:
 * const solve = s => s.replace(/[A-Z]/g,'').length < s.length/2 ? s.toUpperCase() : s.toLowerCase()
 * 
 * Kinda similar to my solution, slightly different:
 * 
 * function solve(s) {
    let upper = s.split('').filter(x => x === x.toUpperCase()).length
    let lower = s.length - upper
    return (upper > lower) ? s.toUpperCase() : s.toLowerCase() 
   }
 * 
 * 
 * 
 */