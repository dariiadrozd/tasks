// Реализуйте класс Calculator, который будет хранить в себе 4 метода: 
// сумма чисел, разность, произведение, частное. 2 числа передаются в класс,
// далее вызываеются соответствующие функции. Добавить проверки на ввод

// class Calculator {
//   doPlus(num1, num2) {
//     console.log(num1 + num2);
//   }
//   doMinus(num1, num2) {
//     console.log(num1 - num2);
//   }
//   doMultiply(num1, num2) {
//     console.log(num1 * num2);
//   }
//   doDivide(num1, num2) {
//     console.log(num1 / num2);
//   }
// }

// const calculator = new Calculator()
// calculator.doPlus(1, 2);
// calculator.doMinus(2, 4);
// calculator.doMultiply(3, 5);
// calculator.doDivide(6, 7);


class Calculator {
  num1;
  num2;
  doPlus() {
    console.log(this.num1 + this.num2);
  }
  doMinus() {
    console.log(this.num1 - this.num2);
  }
  doMultiply() {
    console.log(this.num1 * this.num2);
  }
  doDivide() {
    console.log(this.num1 / this.num2);
  }
}

const calculator = new Calculator();
calculator.num1 = 2;
calculator.num2 = 4;
calculator.doPlus();
calculator.doMinus();
calculator.doMultiply();
calculator.doDivide();