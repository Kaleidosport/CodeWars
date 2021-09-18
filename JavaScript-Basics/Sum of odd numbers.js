// Origin: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

function rowSumOddNumbers(n) {
	return Math.pow(n, 3);
}

/* The sum of each nth row equals n³ => 1³ = 1 ; 2³ = 8 = 3 + 5 ; 3³ = 27 = 7 + 9 + 11 and so on
 * Therefore, a simple Math.pow(n, 3) does the trick */