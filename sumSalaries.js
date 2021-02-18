let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(object) {
  let sum = 0;
  for (value of Object.values(object)) {
    sum = value + sum;
  }
  return sum;
}

console.log(sumSalaries(salaries)); // 650
