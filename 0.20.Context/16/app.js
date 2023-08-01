// *Вычислите сумму массива чисел статичного массива используя рекурсию

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

function sumArr(arr) {
    if (arr.length === 0) return 0
    return arr[0] + sumArr(arr.slice(1))
}

const result = sumArr(arr);
console.log(result);