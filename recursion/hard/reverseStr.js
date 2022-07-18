
// function reverse(str) {
//   // add whatever parameters you deem necessary - good luck!
//   let revStr = '';

//   function revIt(newStr) {
//     if (newStr.length === 0) return revStr;

//     //pick last char
//     let letter = newStr.charAt(newStr.length - 1);

//     //Concate to rev str variable
//     revStr += letter;

//     //pass string- last char to recursion
//     revIt(newStr.substr(0, newStr.length - 1));
//   }

//   revIt(str);
//   return revStr;
// } 

function reverse(str) {
  if (str.length === 0) return str;
  console.log(str);
  return str.charAt(str.length - 1) + reverse(str.substr(0, str.length - 1));
}


console.log(reverse('awesome'));
console.log(reverse('rithmschool')); //loohcsmhtir



// function productOfArray(arr) {
//   if (arr.length === 0) return 1;
//   return arr[0] * productOfArray(arr.slice(1));
// }