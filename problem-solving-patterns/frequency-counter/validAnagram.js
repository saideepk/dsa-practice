// Frequency Counter
function validAnagram(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  let lookup = {};
  for (let i = 0; i < s1.length; i++) {
    let first = s1[i];
    if (lookup[first]) {
      lookup[first]++;
    } else {
      lookup[first] = 1;
    }
  }
  //console.log("--", lookup);

  for (let i = 0; i < s2.length; i++) {
    let first = s2[i];
    console.log(lookup[first]);
    if (!lookup[first]) {
      return false;
    } else {
      lookup[first]--;
    }
  }
  return true;

  //console.log("--", s1Counter, s2Counter);
}

console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'someaw'));
console.log(validAnagram('qwerty', 'qeywtr')); // true
