// Multiple pointer approach


function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length <= 0) return 0;

  // Naive approach
  let uniqArr = [];
  for (let val of arr) {
    if (!uniqArr.includes(val)) {
      uniqArr.push(val);
    }
  }
  console.log(uniqArr.length);

  // Multiple pointer approach
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  console.log(count);
}

console.log(countUniqueValues([1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4