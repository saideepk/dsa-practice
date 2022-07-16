function findLongestSubstring(str) {
  if (!str) return 0;
  let start = 0, i = 0, longest = 0, lookup = {};

  while (i < str.length) {
    let char = str[i];
    if (lookup[char]) {
      start = Math.max(start, lookup[char]);
    }
    longest = Math.max(longest, i - start + 1);
    lookup[char] = i + 1;

    i++;
  }
  return longest;
}

console.log(findLongestSubstring('thisisawesome')); //6-awesom
console.log(findLongestSubstring('')); //0
console.log(findLongestSubstring('rithmschool')); //7-rithmsch
console.log(findLongestSubstring('thecatinthehat')); //7-hecatin
console.log(findLongestSubstring('bbbb')); //1
console.log(findLongestSubstring('longestsubstring')); //8-ubstring
console.log(findLongestSubstring('thisisshowwedoit')); //6-wedoit