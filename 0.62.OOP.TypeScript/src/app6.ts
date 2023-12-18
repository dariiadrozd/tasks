//Создайте класс Calculator, который содержит методы add() (сложение), subtract() (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр класса Calculator и выполните несколько операций.

// class Calculator {
//     add(a: number, b: number): number {
//         return a + b;
//     }

//     subtract(a: number, b: number): number {
//         return a - b
//     }

//     multiply(a: number, b: number): number {
//         return a * b;
//     }

//     divide(a: number, b: number): number {
//         if (b !== 0) {
//             return a / b
//         } else {
//             console.log('na nol delit nelzia');
//         }
//     }

// }

// const calculator = new Calculator;

// console.log(calculator.add(10, 22));
// console.log(calculator.subtract(1321, 902));
// console.log(calculator.multiply(67, 89));
// console.log(calculator.divide(10, 2));


class Calculator {
    a:number;
    b:number

    add(): number {
        return this.a + this.b;
    }

    subtract(): number {
        return this.a - this.b;
    }

    multiply(): number {
        return this.a * this.b;
    }

    divide(): number {
        if (this.b !== 0) {
            return this.a / this.b;
        } else {
            console.log('na nol delit nelzia');
        }
    }

}

const calculator = new Calculator;

calculator.a = 16758493023;
calculator.b = 89;

console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());