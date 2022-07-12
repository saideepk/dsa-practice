function checkPalindrome(str) {

  const splitArr = str.split('');
  let revStr = '';
  for (let i = splitArr.length; i--;) {
    revStr += splitArr[i];
  }
  if (revStr === str) {
    console.log(`${str} is a palindrome`);
  } else {
    console.log(`${str} is not a palindrome`);
  }

}

console.log(checkPalindrome('apple'));
console.log(checkPalindrome('markram'));