// На входе массив значений. Необходимо его обработать. 
// Если в массиве есть хотя бы 1 строка, бросить исключение.

const arr = [1, 2, 'hello', 3, 4, 5];

function doArray(arr) {
    try {
        let new_arr = arr.some(function (el) {
            if (isNaN(el)) throw new Error('В массиве есть строка');
        })
        return true;
    } catch (error) {
return error.message;
    }
}

let result = doArray(arr)
console.log(result);
