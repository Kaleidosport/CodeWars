// Origin: 

function evenator(str) {
    return str.replace(/[.,?!_]/g,"").split(" ").map(i => i.length%2 !==0 ? i + i[i.length-1]:i).join(" ")
 }