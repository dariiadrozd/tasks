// Напишитепрограмму,котораянаходитполноечислометровпозаданномучислу сантиметров. Добавить проверку на ввод только чисел
// 345 -> 3
// 100 -> 1

let a = prompt("Введите число");
if (isNaN(a)) {
    console.log("ошибка ввода");
} else {
    console.log("Полное число метров: ", Math.floor(a / 100));
}