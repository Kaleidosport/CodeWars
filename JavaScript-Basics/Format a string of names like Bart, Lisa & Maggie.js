// Origin: https://www.codewars.com/kata/53368a47e38700bd8300030d

let list = (names) => names.length === 0 ? "" : names.length === 1 ? names[0].name : names.slice(0, names.length - 1).map(character => character.name).join(", ") + " & " + names[names.length - 1].name

/** Voted best practice:
 * 
 * function list(names){
  return names.reduce(function(prev, current, index, array){
    if (index === 0){
      return current.name;
    }
    else if (index === array.length - 1){
      return prev + ' & ' + current.name;
    } 
    else {
      return prev + ', ' + current.name;
    }
  }, '');
 }
 * 
 * if (index === 0) return current.name handles both the first element in a long list and the single element if there's only 1
 * 
 * Voted most clever:
 * 
 * function list(names) {
  var xs = names.map(p => p.name)
  var x = xs.pop()
  return xs.length ? xs.join(", ") + " & " + x : x || ""
}
 * 
 * Noteworthy:
 * 
 * function list(names) {
  return names.map(o => o.name).join(', ').replace(/^(.*)(, )(.*)$/, '$1 & $3');
}
 * 
 * Also:
 * 
 * function list(names){
  return names
           .map((item) => item.name)
           .join(', ')
           .replace(/,\s([^,]+)$/, ' & $1');
}
 * 
 */