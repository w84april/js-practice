function Calculator() {
  this.operations = {
    "*": (a, b) => a * b,
  };
  this.addMethod = function (operator, result) {
    this.operations[operator] = result;
    console.log(this.operations);
  };

  this.calculate = function (str) {
    let operator = str.split(" ")[1];
    return this.operations[operator](
      parseInt(str.split(" ")[0]),
      parseInt(str.split(" ")[2])
    );
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("+", (a, b) => a + b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("-", (a, b) => a - b);
powerCalc.addMethod("++", (a, b) => a + b + a + b);

console.log(powerCalc.calculate("1 ++ 2"));
