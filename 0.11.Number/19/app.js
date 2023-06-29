// // Даны три числа a, b, c. Напишите программу, которая находит корни квадратного
//  уравнения
//  Если уравнение имеет два корня, то следует вывести их в порядке возрастания.

let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
let c = +prompt("Введите третье число");
let D = b ** 2 - 4 * a * c;

if (D > 0) {
    const x1 = (-b + Math.sqrt(D) / (2 * a));
    const x2 = (-b - Math.sqrt(D) / (2 * a));
    if (x1 > x2) {
        console.log(x1, x2);
    } else {
        console.log(x1, x2);
    }
} else if (D === 0) {
    console.log(-b / (2 * a));
} else if(D < 0){
    console.log("нет корней");
}