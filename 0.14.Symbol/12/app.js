// На вход программе подается строковое значение. Если значение больше 2-х и
// меньше 11-ти или больше или равна 26-ти и меньше 30-ти, то выведите 'Верно', в
// противном случае выведите 'Неверно'

let a = +prompt("введите число");
if (a > 2 && a < 11 || a >= 26 && a < 30) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

