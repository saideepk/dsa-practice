// function productOfArrayWithHelper(arr) {
//   let result = 1;
//   function product(newArr) {
//     if (newArr.length === 0) return 1;
//     result *= newArr[0];
//     product(newArr.slice(1));
//   }
//   product(arr);
//   return result;
// }


function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}


console.log(productOfArray([1, 2, 3]));  // 6
console.log(productOfArray([8, 2, 5, 10]));  // 800 