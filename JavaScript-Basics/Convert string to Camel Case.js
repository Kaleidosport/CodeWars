// Origin: https://www.codewars.com/kata/517abf86da9663f1d2000003

function toCamelCase(str) {
    let intermediary = [], strArray = str.split(""), len = strArray.length
    for (let i = 0; i < len; i++) {
      if (strArray[i].match(/[a-zA-Z]/)) {
        intermediary.push(strArray[i])
      } else {
        intermediary.push(strArray[i + 1].toUpperCase())
        i++
      }
    }
    return intermediary.join("")
}

/** Voted most clever:
 * 
 * function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
 * 
 * 
 * function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}
 * 
 */