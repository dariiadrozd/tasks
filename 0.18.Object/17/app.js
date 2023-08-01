// Найти значение массива, повторяющееся в нем наибольшее количество раз
const arr = ["darya", "warszawa", "borysów", "hanna", "ivan", "ivan"];

const obj = {};

for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
        obj[arr[i]] += 1;
    } else {
        obj[arr[i]] = 1;
    }
}

let maxvalueinobj = obj[arr[0]]
for (let key in obj) {
    if (obj[key] > maxvalueinobj) {
        maxvalueinobj = obj[key]
    }
}

for(let key in obj){
    if (obj[key] === maxvalueinobj){
    console.log(key);
    break
    }
}


