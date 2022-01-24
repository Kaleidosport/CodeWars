// Origin: https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa

function openOrSenior(data){
    return data.map((a, b) => a[0] > 54 && a[1] > 7 ? "Senior" : "Open")
} // a[0] === data[x][0] & a[1] === data[x][1]

// ***************** Same method, other syntax *******************

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
