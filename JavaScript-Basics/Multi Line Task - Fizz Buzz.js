// Origin: https://www.codewars.com/kata/593550e26d07549c5100004a

f=
n=>
n%
15
==0
?
'f\
iz\
zb\
uz\
z'
:n%
5==
0?
'b\
uz\
z':
n%3
==0
?
'f\
iz\
z'
:n

// *************** Without the 3 characters per line requirement **************

f = n => n % 15 === 0 ? 'fizzbuz' : n % 5 === 0 ? 'buzz' : n % 3 === 0 ? 'fizz' : n

// ************** Voted best practice and most clever **************

f = n => (n % 3 ? "" : "fizz") + (n % 5 ? "" : "buzz") || n
// n % 3 ? and n % 5 ? imply === 1 in both cases, then you either concatenate or not depending on n's dividers
// Pretty smart & neat thinking, actually, since it addresses whether % 15 encompasses both or not

// ************** Reworking it with template literals **************

f = n => `${(n % 3 ? `` : "fizz")}${(n % 5 ? '' : `buzz`)}` || n
// Can switch between '', "" and `` for the part enclosed between brackets