function sameFrequency(num1, num2) {
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;
  let lookup = {};
  for (let val of str1) {
    if (lookup[val]) {
      lookup[val]++;
    } else {
      lookup[val] = 1;
    }

  }

  for (let val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val]--;
    }
  }
  return true;

}

console.log(sameFrequency(123, 231)); // true
console.log(sameFrequency(34, 12)); // F
console.log(sameFrequency(22, 1252)); // F
console.log(sameFrequency(5221, 1252)); // true
