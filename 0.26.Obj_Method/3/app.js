// На входе статичный объект и строка str. 
// Написать функцию на поиск в объекте значения str. Values

const obj = {
    id: 'email',
    name: 'darya@email.com',
    age: 18,
}

const str = 'email';

function SearchStr(obj, str) {
    try{
        const string = Object.values(obj);
        if(!string.includes(str)) throw new Error (false);
        return true;
    } catch(error){
        return error.message
    }
 

}

const result = SearchStr(obj, str)
console.log(result);

