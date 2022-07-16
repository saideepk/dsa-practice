function factorialIterative(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i; // fac = fac *i;
  }
  return fac;
}

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

///console.log(factorialIterative(5))
console.log(factorial(5))