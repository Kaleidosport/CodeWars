// Origin:

let sortByLastLetter = (array) => {
    for(let i = 0; i < array.length - 1; i++) {
      for (let j = i + 1; j < array.length; j++) {
        if  (array[i].toString().slice(-1) > array[j].toString().slice(-1)) {
          [array[i], array[j]] = [array[j], array[i]]
        }
      }
    }
    return array
}

/** Voted best practice:
 * const sortMe = (arr) => arr.slice().sort((a, b) => `${a}`.slice(-1).localeCompare(`${b}`.slice(-1)) 
                           || arr.indexOf(a) - arr.indexOf(b));
 * 
 * Same spirit:
 * const sortMe = arr => [...arr].sort((a, b) => `${a}`.slice(-1).localeCompare(`${b}`.slice(-1)) || arr.indexOf(a) - arr.indexOf(b))
 * 
 * Both made used of localeCompare(): https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
 * 
 */