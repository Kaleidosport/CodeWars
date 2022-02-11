// Origin: https://www.codewars.com/kata/56541980fa08ab47a0000040

function printerError(s) {
    let filtered = s.split("").filter(x => x.match(/[a-m]/)).length, sLength = s.length
    return `${sLength - filtered}/${sLength}`
}