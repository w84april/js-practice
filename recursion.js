//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.

//арифметическая прогрессия
// function sumTo(n) {
//   return ((1 + n) / 2) * n;
// }

//console.log(sumTo(1));
//console.log(sumTo(2));
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
let start = Date.now();
console.log(sumTo(100));
let end = Date.now();
console.log(end - start);

//цикл
//  function sumTo(n) {
//    let result = 0;
//    while (n != 0) {
//      result += n;
//      --n;
//    }
//    return result;
//  }

//рекурсия - самая долгая
// function sumTo(n) {
//   if (n == 0) {
//     return n;
//   } else {
//     return n + sumTo(n - 1);
//   }
// }
