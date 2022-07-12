function areThereDuplicates(...num1) {
  let temp = {};
  for (let val of num1) {
    if (temp[val]) {
      temp[val]++;
    } else {
      temp[val] = 1;
    }
  }
  if (Math.max(...Object.values(temp)) >= 2) {
    return true;
  }
  return false;

}

console.log(areThereDuplicates(1, 2, 3)); // F
console.log(areThereDuplicates(1, 2, 2)); // T
console.log(areThereDuplicates('a', 'b', 'c', 'a')); // T
