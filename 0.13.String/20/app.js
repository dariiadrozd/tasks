// Пользователь вводит строку. Необходимо посчитать количество гласных

let a = prompt('введите текст');

let count = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] === 'a' || a[i] === 'o' || a[i] === 'e' || a[i] === 'u' || a[i] === 'i' || a[i] === 'y') 
    count += 1
}

console.log(`${count} - гласные`);