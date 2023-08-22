// На входе статичный объект и строка str. 
// Написать функцию на поиск в объекте значения str. Values

const obj ={
    id: 'email',
    name: 'darya@email.com',
    age: 18,
}

const str = 'email';

function SearchStr(obj, str){
    const string = Object.values(str);
    return string
}

const result = SearchStr(obj, str)
console.log(result);

