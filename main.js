// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».

// То есть дефисы удаляются, а все слова после них получают заглавную букву.

function camelize(str) {
  firstElement = str.split("-").slice(0, 1);
  let otherElements = str.split("-").slice(1).map((item) => item[0].toUpperCase() + item.slice(1)).join("");
  return (firstElement + otherElements)

  console.log(firstElement);
  console.log(otherElements);
}
console.log(camelize("list-style-image"));
