function countDown(num) {
  if (num === 0) return;
  console.log(num);
  num--;
  countDown(num);
}

console.log(countDown(8));