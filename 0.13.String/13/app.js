// Пользователь вводит дату в формате 'xxxx-xx-xx'. 
// Преобразуйте эту дату в формат 'xx.xx.xxxx'.

let a = prompt('введите дату в формате "xxxx-xx-xx"')

console.log(a.split('-').reverse().join('.'));