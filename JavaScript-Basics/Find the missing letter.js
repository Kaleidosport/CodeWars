// Origin: https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter (array)
{
  for (let i = 0; i < array.length; i++) {
    if (array[i + 1].charCodeAt(0)!== array[i].charCodeAt(0) + 1) return String.fromCharCode(array[i].charCodeAt(0) + 1)
  }
}

/** Interesting solution using map():
 * 
 * function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}
 * 
 */