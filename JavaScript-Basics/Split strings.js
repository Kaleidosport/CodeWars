// Origin: https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

let solution = str => str.length === 0 ? [] : (str.length % 2 ? str + "_" : str).match(/../g)

// **************** OR ***************

let solution = str => ((str + "_").match(/../g) || [])

/** Voted best practice, close enough with actual explanation from the author:
 * 
 * const SOLUTION = s => (s+"_").match(/.{2}/g)||[]
 * 
 * 1. (s+'_') -> means add _ in s or string
 * 2. /.{2}/g -> this regexp means to return an array for all that matches the pattern (any 2 character)
              -> . is a wildcard character (will match any one character)
              -> {2} is a quantity specifier (specifies the lower and upper number of patterns - {lower, upper} ; the one used on the above solution means it wants specific number of matches - {2} ) 
              -> g means to look for all that matches the pattern which is to look for every 2 character, without this, it'll return only the first match which is ['ab']
   3. ||[]    -> means if no match found, it'll return empty array, without this, if no match was found, it will return NULL 
 * 
 */