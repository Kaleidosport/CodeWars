// Origin: 

function arrayDiff(a, b) {
    return a.filter(e => !b.includes(e))
}

// Filter array [a] so that it only includes the e values that are absent from [b]