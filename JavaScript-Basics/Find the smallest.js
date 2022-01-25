// Origin: 

function smallest(n) {
    let array = []
    let intermediary
    let workitout = Array.from(String(n), Number) // Even better than [...n.toString()]

    for (let i = 0; i < workitout.length ; i++) {

    	for (let j = 0; j < workitout.length; j++) {
        if (workitout[j] < intermediary || intermediary === undefined) intermediary = workitout[j]
        console.log(intermediary)      
    	}

        let index = workitout.indexOf(intermediary)
        console.log(index)
        array.push(index)
        workitout = index > 0 ? workitout.unshift(workitout.splice(index, 1)) : workitout
        if (workitout[0] === 0) workitout.splice(0, 1)
    }
}

console.log(smallest(234))
console.log(Array.from(String(234), Number).join().split(",").join(""))

// ************** Testing things out **************

console.log(Array.from(String(209917, Number)).splice(2, 1))
console.log(Array.from(String(209917, Number)).push(Array.from(String(209917, Number)).splice(2, 1)))

let number = 209917
function bidule (number) {
    let array = Array.from(String(number), Number)
    array.push(parseInt(array.splice(2, 1)))
    console.log(array)
    return ~~(array.join(""))
} 
console.log(bidule(209917))