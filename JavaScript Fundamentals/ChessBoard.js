// Origin: https://www.codewars.com/kata/581c894633b9fe465d0000a6

function board(size) {
    // build your string here
    let array = []
    for (let i = 0; i < (size * size + 1); i++) {
      if (i % size === 0 && i !== 0) array.push("\n")
      if (i % 2 === 1) array.push(" ")
      else array.push("#")
    }
    return array.slice(0, -1).join("")
      // must return the chess board string in the end 
}

/** Clever:
 * 
 * function board(size) {
  const arr = [...Array(size)];
  const odd = arr.map((_, i) => i % 2 ? '#' : ' ').join('');
  const even = arr.map((_, i) => i % 2 ? ' ' : '#').join('');
  return arr.map((_, i) => i % 2 ? odd : even).join('\n') + '\n';
  }
 * 
 * Clean:
 * 
 * function board(size) {
  // build your string here
  var arr = ["#"," "];
  var str= "";
  for ( let i = 0; i < size; i++ ) {
    for ( let j = i; j < size+i; j++ ) {
       str += arr[j%2];
    }
    str += "\n";
  }
  return str;
  }
 * 
 * Clean and short:
 * 
 * const board = (size) => Array.from({ length: size }, (_, i) => Array.from({ length: size }, (_, j) => (i + j) % 2 ? " " : "#").join("") + "\n").join("")
 * 
 */