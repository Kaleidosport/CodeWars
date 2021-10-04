// Origin: https://www.codewars.com/kata/58223370aef9fc03fd000071/javascript

function dashatize(num) {
    //get 'em
    return String(num)
      .replace(/([13579])/g, "-$1-")
      .replace(/--+/g, "-")
      .replace(/(^-|-$)/g, "")
}

/** Other solution
 * function dashatize(num) {
  return isNaN(num) ? 'NaN' : num.toString().match(/([13579]|[02468]+)/g).join('-');
  }
 */