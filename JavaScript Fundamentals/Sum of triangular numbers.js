// Origin: https://www.codewars.com/kata/580878d5d27b84b64c000b51

let sumTriangularNumbers = (n) => n < 0 ? 0 : (n * (n + 1) * (n + 2)) / 6

/** Best practice and most clever from the start, hurray /ô/
 * Just using the appropriate math formula
 * 
 * Noteworthy solution:
 * 
 * function sumTriangularNumbers(n) {
    var sum = 0;  
    for(var i = 1; i <= n; i++)
    {
        sum += (i*(i+1))/2;
    }
    return sum;
   }
 * 
 */