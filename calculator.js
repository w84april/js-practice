function Calculator() {
  this.operations = {};
  this.addMethod = function (operator, result) {
    this.operations[operator] = result;
    console.log(this.operations);
  };

  this.calculate = function (str) {
    str = str.split(" ");
    let operator = str[1];
    return this.operations[operator](+str[0], +str[2]);
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("+", (a, b) => a + b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("-", (a, b) => a - b);
powerCalc.addMethod("++", (a, b) => a + b + a + b);
powerCalc.addMethod("**", (a, b) => a ** b);

console.log(powerCalc.calculate("1 ** 2"));
