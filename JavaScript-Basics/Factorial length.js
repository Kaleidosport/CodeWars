// Origin: https://www.codewars.com/kata/59f34ec5a01431ab7600005a 

function count(n) {
    let o = 0
    while (n > 1) {
      o += Math.log10(n) // Logarithme en base 10, mais oui mais oui !
      n--
    }
    return Math.ceil(o)
}

/** Praiseworthy solution:
 * 
 * count = (a, b=0) => {
    while (a>1) b += Math.log10(a--);    
    return Math.ceil(b);
  };
 * 
 */