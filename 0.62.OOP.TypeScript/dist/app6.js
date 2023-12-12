//Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и выполните несколько операций.
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b !== 0) {
            return a / b;
        }
        else {
            console.log('na nol delit nelzia');
        }
    }
}
const calculator = new Calculator;
console.log(calculator.add(10, 22));
console.log(calculator.subtract(1321, 902));
console.log(calculator.multiply(67, 89));
console.log(calculator.divide(10, 2));
