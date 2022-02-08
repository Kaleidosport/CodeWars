// Origin: https://www.codewars.com/kata/5ea39ab1d8425e0029fcd035

function pingPong(sounds) {
    let sequence = sounds.split("-"), pingPoints = 0, pongPoints = 0
    for (let s = 0; s < sequence.length; s++) {
        pingPoints += (sequence[s] !== "ping" || sequence[s] !== "pong") && sequence[s - 1] === "pong" ? 1 : 0
        pongPoints += (sequence[s] !== "ping" || sequence[s] !== "pong") && sequence[s - 1] === "ping" ? 1 : 0 
    }
    return pingPoints > pongPoints ? "ping" : pingPoints < pongPoints ? "pong" : pingPoints === pongPoints && sequence.lastIndexOf("ping") < sequence.lastIndexOf("pong") ? "ping" : "pong"
} // Close enough, gotta rework it a little.

function pingPong(sounds) {
    let sequence = sounds.split("-"), pingPoints = 0, pongPoints = 0, rally = []
    for (let s = 0; s < sequence.length; s++) {
        if (sequence[s] === "ping" || sequence[s] === "pong") rally.push(sequence[s])
        else if (rally[0] === "ping" && rally[rally.length - 2] === "ping") {
            pingPoints++
            rally = []
        }
        else if (rally[0] === "pong" && rally[rally.length - 2] === "pong") {
            pongPoints++
            rally = []
        }
    }
    return pingPoints > pongPoints ? "ping" : pingPoints < pongPoints ? "pong" : pingPoints === pongPoints && sequence.lastIndexOf("ping") < sequence.lastIndexOf("pong") ? "ping" : "pong"
} // Even closer, only 1 failed test but gotta try something cleaner.

function pingPong(sounds) {
    let sequence = sounds.split("-"), pingPoints = 0, pongPoints = 0, lead
    for (let s = 0; s < sequence.length; s++) {
        if (sequence[s] === "ping" && sequence[s + 1] === "pong") pingPoints++
        if (sequence[s] === "ping" && sequence[s + 1] !== "pong") lead = "pong"
        if (sequence[s] === "pong" && sequence[s + 1] === "ping") pongPoints++
        if (sequence[s] === "pong" && sequence[s + 1] !== "ping") lead = "ping"
    }
    return pingPoints > pongPoints ? "ping" : pingPoints < pongPoints ? "pong" : lead
} // Worked as a charm!