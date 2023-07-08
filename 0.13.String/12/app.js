// Пользователь вводит дату в формате ‘х-х-х'. Замените все дефисы на '!'
let a = prompt('ввести дату в формате "x-x-x"');

console.log(a.split('-').join('!'));

console.log(a.replaceAll('-','!'));