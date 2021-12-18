// Origin: https://www.codewars.com/kata/57f7796697d62fc93d0001b8

let trouble = (x, t) => {
    for (let i = 0; i < x.length; i++) {
      if (x[i] + x[i + 1] === t) {
        x.splice(i + 1, 1)
        i--
      }
    }
    return x
}

/** Interesting thinking, this time using a reduce():
 * 
 * x.reduce((pre, val) => val + pre[pre.length - 1] !== t ? [...pre, val] : pre, [])
 * 
 */
