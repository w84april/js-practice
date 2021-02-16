//n^k

let n = 0;
let k = 3;

function pow(n, k) {
  if (n < 1) {
    return "Введите число больше 0";
  } else {
    return n ** k;
  }
}

console.log(pow(n, k));
