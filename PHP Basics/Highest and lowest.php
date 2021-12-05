<!-- Origin: https://www.codewars.com/kata/554b4ac871d6813a03000035 !-->

<?php
function highAndLow($numbers)
{
  return max(explode(" ", $numbers)) . " " . min(explode(" ", $numbers));
}
?>