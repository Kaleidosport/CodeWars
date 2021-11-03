// Origin: https://www.codewars.com/kata/514a024011ea4fb54200004b

function domainName(url) {
    if (url.includes("www.")) {
      return url.split("www.").pop().split(".").shift()
    }
    else if (url.includes("ww.")) {
      return url.split("ww.").pop().split(".").shift()
    }
    else if (url.includes("http://")) {
      return url.split("//").pop().split(".").shift()
    }
    else if (url.includes("https://")) {
      return url.split("//").pop().split(".").shift()
    }
    else return url.split(".").shift()
}

// ************** REFACTORED **************

function domainName(url) {
    if (url.includes("ww.")) {
      return url.split("ww.").pop().split(".")[0]
    }
    else if (url.includes("http://") || url.includes("https://")) {
      return url.split("//").pop().split(".")[0]
    }
    return url.split(".")[0]
}

/** Voted best practice and most clever:
 * 
 * function domainName(url) {
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
   };
 * 
 * => Keep in mind .split(".")[0] acts the same way as .split(".").shift()
 * 
 * One-liner:
 * return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1]
 * 
 * Another one:
 * return url.replace(/.+\/\/|www.|\..+/g, '')
 */