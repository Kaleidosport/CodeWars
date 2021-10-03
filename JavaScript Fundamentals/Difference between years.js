// Origin: https://www.codewars.com/kata/588f5a38ec641b411200005b

var howManyYears = function(date1, date2){
    return Math.abs(date1.split('/')[0]-date2.split('/')[0])
  }

// Could also have gone with .slice(0,4)