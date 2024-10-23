class Calculator {
  constructor() {}

  // Приватный метод класса, проверяющий на приводимость типа к number,
  // чтобы избежать NaN в результате вычислений
  #isNumber = (...args) => args.every(arg => !isNaN(Number(arg)));

  add(a, b) {
    return this.#isNumber(a, b) ? Number(a) + Number(b) : "Not a number";
  }
  subtract(a, b) {
    return this.#isNumber(a, b) ? Number(a) - Number(b) : "Not a number";
  }
  multiply(a, b) {
    return this.#isNumber(a, b) ? Number(a) * Number(b) : "Not a number";
  }
  divide(a, b) {
    if (!this.#isNumber(a, b)) return "Not a number";
    else if (Number(b) === 0) return "Division by 0 is prohibited";
    else return Number(a) / Number(b);
  }
}

const calculator = new Calculator();

console.log("--- Calculator ---");

// Примеры
console.log(calculator.add(18, 3)); // 21
console.log(calculator.subtract(55, 26)); // 29
console.log(calculator.multiply(888524, 4)); // 3554096
console.log(calculator.divide(777, 6)); // 129.5
console.log(calculator.divide(8, 0)); // Division by 0 is prohibited

// Теперь проверим для других типов
console.log(calculator.add("5", "3")); // 8
console.log(calculator.subtract(3, "5")); // -2
console.log(calculator.divide("3", 5)); // 0.6
console.log(calculator.divide("3", [])); // Division by 0 is prohibited ( [] приводится к 0, поэтому делить на него нельзя )
console.log(calculator.multiply({}, {})); // Not a number (Нельзя привести данные объекты к числу, поэтому пишем ошибку)