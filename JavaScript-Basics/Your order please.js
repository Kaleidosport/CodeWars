// Origin: https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words) {
    if (words.length === 0) return ""
    
    let meddler = [], wordsArray = words.split(" ")
    for (let i = 1; i <= wordsArray.length; i++) {
      meddler.push(wordsArray.find(x => x.includes(i)))
    }
    return meddler.join(" ")
}

/** Voted most clever, close enough to my initial idea:
 * 
 * function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 
 * 
 */