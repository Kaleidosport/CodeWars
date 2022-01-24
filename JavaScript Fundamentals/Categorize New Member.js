// Origin:

function openOrSenior(data){
    return data.map((a, b) => a[0] > 54 && a[1] > 7 ? "Senior" : "Open")
}

// ***************** Same method, other syntax *******************

function openOrSenior(data){
    return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}

// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
