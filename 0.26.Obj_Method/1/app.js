// // На входе статичный объект и строка str. 
// Необходимо найти в объекте ключ str и вывести true при наличии совпадения, 
// false в противном случае

const obj = {
    id: 'email',
    name: 'darya@email.com',
    age: 18,
}

const str = 'id';

const bool = Object.hasOwnProperty(str)
console.log(bool);