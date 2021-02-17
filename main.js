//У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

let arr = ["HTML", "JavaScript", "CSS"];

function copySorted(arr) {
  let newArr = arr.slice(0);
  return newArr.sort();
}

let sorted = copySorted(arr);

console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (без изменений)
