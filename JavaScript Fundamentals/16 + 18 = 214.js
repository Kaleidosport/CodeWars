// Origin: https://www.codewars.com/kata/5effa412233ac3002a9e471d

function add(num1, num2) {
    let sum = []
    if (num1.toString().length <= num2.toString().length) [...num2.toString()].reverse().map((a, b) => sum.push(Number(a) + Number([...num1.toString()].reverse()[b] || 0)))
    else [...num1.toString()].reverse().map((a, b) => sum.push(Number(a) + Number([...num2.toString()].reverse()[b] || 0)))
    return Number(sum.reverse().join(""))
}

// Very interesting method:

function add(x, y){
    if (y > x){ [x,y] = [y, x] } // This here in particular.
    y = [...[]+y].reverse();
    x = [...[]+x].reverse();
return parseInt(x.map((el,i)=> +el + (+y[i] || 0)).reverse().reduce((a,b)=> a + [] + b))
}