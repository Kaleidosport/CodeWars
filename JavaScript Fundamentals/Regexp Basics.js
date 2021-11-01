// Origin: https://www.codewars.com/kata/567de72e8b3621b3c300000b

String.prototype.isLetter = function() {
    return (/^[a-zA-Z]$/g).test(this)
}

// ************** OR **************

String.prototype.isLetter = function() {
    if (this.length > 1) return false;
    if (this.charCodeAt(0) >= 65 && this.toUpperCase().charCodeAt(0) <= 90) return true;
    return false;
}

// ************** OR **************

String.prototype.isLetter = function() {
    return this.length === 1 && /[a-zA-Z]/.test(this);
}