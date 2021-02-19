//n! = n * (n - 1) * (n - 2) * ...*1

function factorial(n) {
  if (n == 1) {
    return n;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(3));
