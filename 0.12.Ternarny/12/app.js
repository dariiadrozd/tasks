// Напишите программу, в которой рассчитывается сумма и произведение цифр положительного трёхзначного числа
// 123 -> Сумма цифр = 6 Произведение цифр = 6
let a = '445';
if (a > 99 && a < 1000) {
    console.log(+a[0] * +a[1] * +a[2]);
}