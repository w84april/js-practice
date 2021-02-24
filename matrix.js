let matrix = [
  [1, 2, 3, 1, 3, 2, 9],
  [4, 5, 6, 5, 7, 8, 1],
  [7, 8, 9, 4, 6, 5, 4],
];

function checkUnique(matrix) {
  let set = new Set();
  let newArray = [];
  let boolArray = [];
  for (let k = 0; k < matrix[0].length - 2; k++)
    for (let i = 0; i < 3; i++) {
      for (let j = k; j <= k + 2; j++) {
        newArray.push(matrix[i][j]);
      }
    }
  let index = 0;
  for (let n = 0; n < newArray.length; n++) {
    set.add(newArray[n]);
    if (n % (8 + index) === 0 && n !== 0) {
      console.log(set);
      boolArray.push(set.size === 9);
      set.clear();
      index += 9;
      console.log(index);
    }
  }
  return boolArray;
}

console.log(checkUnique(matrix));
