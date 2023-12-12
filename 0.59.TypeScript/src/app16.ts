//На вход программе подается натуральное число n. Напишите программу, которая печатает звездный треугольник.
// 4 –>****
// *** ** *

function printStarTriangle(n: number): void {
    for (let i = 1; i <= n; i++) {
        let row = '';

        for (let j = 1; j <= i; j++) {
            row += '*';
        }


        for (let j = i + 1; j <= n; j++) {
            row += ' ';
        }
        for (let j = n; j > i; j--) {
            row += '*';
        }

        console.log(row);
    }
}

const n: number = 4;
printStarTriangle(n);
