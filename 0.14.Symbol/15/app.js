// Пользователь вводит строку. Необходимо вывести все гласные отдельной строкой fullstack => ua

let a = "fullstack";
let count = '';

for (let i = 0; i < a.length; i++) {
    if (a[i] === 'a' || a[i] === 'o' || a[i] === 'e' || a[i] === 'u' || a[i] === 'i' || a[i] === 'y') 
    count += a[i];
}

console.log(`${count}`);