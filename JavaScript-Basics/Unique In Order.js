// Origin: 

var uniqueInOrder=function(iterable) {
  let newOrder = [];
  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== iterable[i+1]) {
      newOrder.push(iterable[i]);
    }
  }
  return newOrder;
}

/* The aforementioned kata's solutions depict an even more efficient code:

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

I'm currently unable to get such a process, will have to look it up.
*/