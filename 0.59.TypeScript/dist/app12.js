//Создайте переменную str и присвойте ей строковое значение. Используя цикл while, замените все гласные символы в строке на символ *.
let stri = "Пример строки";
let i = 0;
while (i < stri.length) {
    const currentChar = stri[i].toLowerCase();
    if (currentChar === 'а' || currentChar === 'е' || currentChar === 'ё' || currentChar === 'и' || currentChar === 'о' || currentChar === 'у' || currentChar === 'ы' || currentChar === 'э' || currentChar === 'ю' || currentChar === 'я') {
        stri = stri.slice(0, i) + '*' + stri.slice(i + 1);
    }
    i++;
}
console.log(`всем привет`);
console.log(`Результат: ${stri}`);
