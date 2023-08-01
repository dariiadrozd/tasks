// Напишите функцию, принимающую в качестве параметра статичный объект. 
// Функция возвращает количество пар ключ / значение. IIFE

const obj = {
    id: 1,
    num: 14,
    str: "hello"
};

(function (obj_) {
    let count = 0;
    for (let key in obj) {
        count++;
    }
    console.log(count);
}(obj))