// Origin: https://www.codewars.com/kata/55a996e0e8520afab9000055

function cookie(x){
    // ...
    if (typeof x === "string") return "Who ate the last cookie? It was Zach!"
    else if (typeof x === "number") return "Who ate the last cookie? It was Monica!"
    else return "Who ate the last cookie? It was the dog!"
  }

/** Could also have used switch
 * Best practice: function cookie(x) {
  var t = typeof x
  var who = t=="string" ? 'Zach' : t=="number" ? 'Monica' : 'the dog'
  return `Who ate the last cookie? It was ${who}!`
}
 */