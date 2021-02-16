// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.

// Функция должна быть нечувствительна к регистру:

function checkSpam(str) {
  return (
    str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")
  );
}

console.log(checkSpam("buy ViAgRA now"));
console.log(checkSpam("free xxxxx"));
console.log(checkSpam("innocent rabbit"));
