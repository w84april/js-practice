let i = 0;
function printNumbers(from, to) {
  if (i !== to) {
    i++;
    console.log(i);
  } else {
    return;
  }
}
// setInterval(function () {
//   printNumbers(1, 10);
// }, 100);

setTimeout(function run() {
  printNumbers(1, 10);
  setTimeout(run, 100);
}, 100);
