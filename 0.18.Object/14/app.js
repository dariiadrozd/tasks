const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const a = arr.filter(function (el) {
    return el % 2 === 0;
})

console.log(a);