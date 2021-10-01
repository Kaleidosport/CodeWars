// Origin: https://www.codewars.com/kata/52e1476c8147a7547a000811

function validate(password) {
    return /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,}$/.test(password);
  }

/*           /!\ Important reminder /!\
 * ?=.*? means "Is there <anything> and 1 or more of 
 * <character set> in the following expression?"
 * 
 * This one might appear clearer, it was voted best practice:
 * function validate(password) {
  return  /^[A-Za-z0-9]{6,}$/.test(password) &&
          /[A-Z]+/           .test(password) &&
          /[a-z]+/           .test(password) &&
          /[0-9]+/           .test(password) ;
}
*/ 
