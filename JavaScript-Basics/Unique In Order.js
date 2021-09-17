// Origin: https://www.codewars.com/kata/54e6533c92449cc251001667

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

Explanation provided by the author:

[iterable] is an array containing iterable.
[...iterable] is an array containing all the elements of iterable spread out.
So if iterable = [1, 2, 3], then [iterable] would be [[1, 2, 3]], and [...iterable] would be [1, 2, 3].
But in this case, iterable = 'some string', so spreading out the elements gives you ['s', 'o', 'm', ...] so you can work with it in filter.

But also, sometimes, the iterable is just an array. In that case, it still doesn't hurt to copy the array into a new one.
*/