// Origin: https://www.codewars.com/kata/5648b12ce68d9daa6b000099

let number = function(busStops) {
    let passengers = 0
    busStops.map(moves => passengers = passengers - moves[1] + moves[0])
    return passengers
}

// **************** OR *****************

let number = busStops => busStops.reduce((remaining, [hopping, leaving]) => remaining + hopping - leaving, 0)