// На входе массив. Необходимо создать функцию проверки на то что в массиве только числа.
//  Функция возвращает true, если в массиве только числа и false в противном случае

const arr = [1, 3, 'anton', 7, 3, 'hello'];
function isTrue(a) {
    let result2 = a.every((el) => (!isNaNel(el) ? true : false))
    return result2
}

let result = isTrue(arr);
console.log(result);