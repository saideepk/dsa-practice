/* Sliding Window Pattern */

function maxSubArraySum(arr, num) {
  // add whatever parameters you deem necessary - good luck!
  if (arr.length < num) return null;

  /*
  Naive Approach Q(N2)
  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    //console.log("--", arr[i]);
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
      console.log('--', i, j, arr[i], arr[j], arr[i + j]);
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
  */

  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    //console.log('--', arr[i])
    //sum 1st 3 arr elements
    maxSum += arr[i];
  }

  //assign sum of 1st 3 array items to temp

  tempSum = maxSum; //3

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  //  console.log("--", maxSum);
  return maxSum;

}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubArraySum([4, 2, 1, 6, 2], 4)); // 6
console.log(maxSubArraySum([], 4)); // 10