// На входе объект и число n, символизирующее количество пар ключ-значение. 
// Ключи - автоинкремент (генерируется автоматически от 1 до n).
//  Значение каждого ключа – рандомное число от 1 до 100. 
//  Вывести каждое значение объекта с помощью values

const n = 10;

function doObject(n) {
    const obj = {};
    for (let i = 0; i < n; i++) {
        obj[i] = Math.floor(Math.random() * 100);
    }
    return obj;
}

const obj = doObject(n);

function result(obj) {
    const arr = Object.values(obj);
    for (let i = 0; i < arr.length; i++) {
        console.log(i);
    }
}

const res = result(obj);
