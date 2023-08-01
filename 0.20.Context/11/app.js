// Напишитефункцию,принимающуювкачествепараметрастатичныйобъект. 
// Функция возвращает новый объект, где значения – исключительно числа первоначального объекта. IIFE

const obj = {
    id: 1,
    num: 14,
    str: "hello",
};

(function () {
    let new_obj = {}
    for (let key in obj) {
        if (!isNaN(obj)[key]) {
            new_obj[key] = obj[key]
        }
    }
    console.log(new_obj);
}(obj))
