<!-- Origin: https://www.codewars.com/kata/542c0f198e077084c0000c2e !-->

<?php
function divisors($n) {
  $array = []; // Or $divisors;
  for ($x = 1; $x <= $n; $x++) {
    if ($n % $x == 0) $array[] = $x; // Or $divisors++;   
  }
  return sizeof($array); // Or return $divisors;
}
?>