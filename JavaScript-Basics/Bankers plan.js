// Origin: https://www.codewars.com/kata/56445c4755d0e45b8c00010a

function fortune(f0, p, c0, n, i) {
    p = p / 100
    i = i / 100
    for (let a = 1; a < n; a++) { // Or while (--n > 0)
      f0 += Math.floor(p * f0 - c0)
      c0 += Math.floor(i * c0)
    }
    return f0 >= 0 ? true : false // Or same without ? true : false
}