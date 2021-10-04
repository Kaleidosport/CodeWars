// Origin: https://www.codewars.com/kata/57f8ff867a28db569e000c4a

function kebabize(str) {
    // return
    return str.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/[0-9]/g, "").replace(/^-/, "")
}

// Could have used .split() and .join() as well