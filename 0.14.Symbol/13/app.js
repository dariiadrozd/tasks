// На вход подается строка. Необходимо сложить все элементы числа. Добавить
// проверку на ввод только чисел 53 -> 8
// 135 -> 9

let a = prompt('введите значение');

let result = 0;

if (!isNaN(a)) {
    for (let i = 0; i < a.length; i++) {
        result += +a[i];
    }
    console.log(result);
}else{
    console.log('error');
}


