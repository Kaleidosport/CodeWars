// Origin: https://www.codewars.com/kata/51689e27fe9a00b126000004

function formatWords(words){
    if (!words) return ""
    words = words.filter(v => v.length > 0)
    return (words.length === 0) ? "" : words.length === 1 ? words[0] : 
    `${words.slice(0, -1).join(", ")} and ${words.slice(-1)}`
}

/** Voted best practice and most clever:
 * 
 * function formatWords(words){
    if (!words) return "";
    return words.filter(function(a) { return a !== ''}).join(', ').replace(/(, )+(\S+)$/, ' and $2');
   }
 * 
 * One-liner:
 * 
 * return (a||[]).filter(x=>x).join(', ').replace(/,(?= [^,]*$)/,' and')
 * 
 * Or:
 * 
 * const formatWords = words => words !== null ? words.filter(Boolean).join(', ').replace(/(, )(?!.*\1)/,' and ') : ""
 * 
 * Or even:
 * 
 * const formatWords = w => w ? w.filter(e => e).join(', ').replace(/,(?=\s\w+$)/g, ' and') : ''
 * 
 */