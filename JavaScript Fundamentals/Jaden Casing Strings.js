// Origin: https://www.codewars.com/kata/5390bac347d09b7da40006f6

String.prototype.toJadenCase = function () {
    return this.split(" ")
               .map(word => word.slice(0, 1).toUpperCase() + word.slice(1)) // Or word[0].toUpperCase() + ...
               .join(" ")
}

/* Voted best practice:
 * 
 * String.prototype.toJadenCase = function () { 
     return this.split(" ").map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
     }).join(" ");
   }
 * 
 * Voted most clever:
 * 
 * String.prototype.toJadenCase = function () {
    return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
   };
 * 
 */