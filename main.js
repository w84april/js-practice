// Создайте объект calculator (калькулятор) с тремя методами:

//     read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
//     sum() (суммировать) возвращает сумму сохранённых значений.
//     mul() (умножить) перемножает сохранённые значения и возвращает результат.

let calculator = {
  number1: 0,
  number2: 0,
  read() {
    this.number1 = prompt("Введите 1 число");
    this.number2 = prompt("Введите 2 число");
  },
  sum() {
    return +this.number1 + +this.number2;
  },
  mul() {
    return this.number1 * this.number2;
  },
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
