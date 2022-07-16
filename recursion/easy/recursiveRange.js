
function recursiveRange(n) {
  if (n === 1) return 1;
  return n + recursiveRange(n - 1);
}


console.log(recursiveRange(6));  // 21
console.log(recursiveRange(9));  // 55