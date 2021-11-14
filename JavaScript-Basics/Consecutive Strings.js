// Origin: https://www.codewars.com/kata/56a5d994ac971f1ac500003e

let longestConsec = (strarr, k) => (strarr.length == 0 || k > strarr.length || k <= 0) ? "" : k == 1 ? strarr.join("") : strarr.map((a, b) => strarr.slice(b, b + k).join("")).slice(0, -(k - 1)).sort((c, d) => d.length - c.length)[0]
// Sadly, it only worked in 90% cases...

// ************** REFACTORED **************
let longestConsec = (strarr, k) => (k < 1 || k > strarr.length || k < 1) ? "" : strarr.map((a, b) => strarr.slice(b, b + k).join("")).reduce((c, d) => c.length >= d.length ? c : d)

function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) return ""

    let transit = []
    let longest = ""

    for (let i = 0; i < strarr.length; i++) {
        transit = strarr.slice(i, i + k)
        if (transit.join("").length > longest.length) longest = transit.join("")
    }

    return longest
}

/** Voted best practice:
 * 
 * function longestConsec(strarr, k) {
    var longest = "";
    for(var i=0;k>0 && i<=strarr.length-k;i++){
      var tempArray = strarr.slice(i,i+k);
      var tempStr = tempArray.join("");
      if(tempStr.length > longest.length){
        longest = tempStr;
      }
    }
    return longest;
  }
 * 
 * Voted most clever:
 * 
 * function longestConsec(strarr, k) {
     if( strarr.length==0 || k> strarr.length || k <1 ) return "";
     let lens = strarr.map( (_,i,arr) => arr.slice(i,i+k).join('').length ),
     i = lens.indexOf( Math.max(...lens) );
   return strarr.slice(i,i+k).join('')
   }
 * 
 */