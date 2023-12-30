// //Написать функцию которая принимает 2 числа и возводит 1 во 2 степень. 
// //Добавить необходимые проверки.
// //Написать тест для функции

// function doPow(a, b) {
//     if (typeof a === 'string' || typeof b === 'string') return false
//     return a ** b
// }

// describe('test doPow function', () => {
//     test('test toBe success', () => {
//         const result = doPow(2, 2)
//         expect(result).toBe(4)
//     })
//     test('test toBe false', () => {
//         const result = doPow('a', 'b');
//         expect(result).toBeFalsy()
//     })
// })

// Написать функцию которая принимает 2 числа и возвращает результат 
// произведения 2 множителей. Добавить необходимые проверки. Написать тест для функции

// function doMultiply(a, b) {
//     if (typeof a != 'number' || typeof b != 'number') return false;
//     if (!a || !b) return false
//     return a * b
// }

// describe('test doMultiply', () => {
//     test('test doBe success', () => {
//         const res = doMultiply(2, 2)
//         expect(res).toBe(4)
//     });
//     test('test toBe false', () => {
//         const res = doMultiply('a', 'b')
//         expect(res).toBeFalsy()
//     });
//     test('test toBe is empty', () => {
//         const res = doMultiply()
//             expect(res).toBeFalsy
//         
//     })
// });

//Написать функцию которая принимает массив чисел и находит сумму всех элементов. Добавить необходимые проверки.
//Написать тест для функции

// function doSum(arr) {
//     if (!arr.length) return false
//     let sum = 0
//     for (i = 0; i < arr.length; i++) {
//         if (isNaN(arr[i])) return false
//         sum += arr[i]
//     }
//     return sum
// }

// describe('test doSum Function', () => {
//     const arr = [1, 2, 3, 4, 5];
//     test('test toBe success', () => {
//         const res = doSum(arr)
// //         expect(res).toBe(15)
// //     });

// //     test('test to be false', () => {
// //         const res = doSum([])
// //         expect(res).toBeFalsy()
// //     })

// //     test('test to be false', () => {
// //         const result = doSum(['a','b','c','d']);
// //         expect(result).toBeFalsy()
// // })

// // });

// //У вас есть массив объектов вида приведенного в приложении. 
// // Необходимо вывести все товары, количество которых больше 10 и 
// // произведены в Германии Написать тест для функции



// // function checkArr(arr) {
// //     const filter = arr.filter((el) => el.count > 10 && el.producer == 'Германия')
// //     return filter
// // }

// // describe('test checkArr Function', () => {
// //     const arr = [
// //         { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
// //         { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
// //         { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
// //         { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
// //         { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
// //         { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
// //         { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
// //     ]

// //     test('to have length', () => {
// //         const res = checkArr(arr)
// //         expect(res).toHaveLength(2)
// //     })
// //     test('toEqual', () => {
// //         const res = checkArr(arr)
// //         const equal = [
// //             { id: 2, title: 'Смартфон', count: 33, price: 1500, producer: 'Германия' },
// //             { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
// //         ];
// //         expect(res).toEqual(equal)
// //     })

// // test('to be fake',()=>{
// //     const res = checkArr([])
// //     expect(res).toBeFalsy()
// // })

// // })

// // У вас есть массив строковых значений, состоящий из номеров телефонов. 
// // Необходимо вывести значения массива без дубликатов. Добавить необходимые проверки.
// // Написать тест для функции

// function idUniqArr(arr) {
//     const uniqArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqArr.includes(arr[i])) uniqArr.push(arr[i])
//     }
//     return uniqArr
// }

// describe('Unique Function', () => {
//     const arr = ['+48884062873', '+375293638123', '+375293638123']


//     test('test toHaveLength', () => {
//         const res = idUniqArr(arr)
//         expect(res).toHaveLength(2)
//     })

//     test('toEqual', () => {
//         const res = idUniqArr(arr)
//         const equal = ["+48884062873", "+375293638123"] 
//         expect(res).toEqual(equal)
//     })
// })

// На входе статичный объект. Необходимо посчитать количество пар 
// (ключ: значение) где значение число и вывести количество. 
// Добавить необходимые проверки. Написать тест для функции


function countNumbers(obj) {
    if (typeof obj !== 'object' || Array.isArray(obj)) {
        throw new Error("Input should be an object");
    }

    let count = 0;
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (typeof obj[key] === 'number') {
            count += 1;
        }
    }

    return count;
}