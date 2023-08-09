// На входе строка в виде пароля. 
// Необходимо написать функцию на проверку, что пароль является надежным 
// (содержит хотя бы 1 букву в большом регистре, числа, буквы, символ, длина не менее 8 символов)

const str = "Darya_2004";

function doPassword(str) {
    if (str.length < 8) return "недостаточно символов";
    let countNum = 0;
    let countToUpperCase = 0;
    let countToLowerCase = 0;
    for (let i = 0; i <= str.length; i++) {
        if (!isNaN(str[i])) {
            countNum++
        } else {
            str[i].toUpperCase() === str[i] ? countToUpperCase++ : countToLowerCase++;
        }
    }
    if (str.includes('@') || str.includes('-') || str.includes('$') || str.includes('*')) {
        countSymbol++;
    }
    if (countNum === 0 || countToUpperCase === 0 || countToLowerCase == 0 || countSymbol === 0) {
        return 'ненадежный пароль'
    } else {
        return 'надежный пароль'
    };
}
let result = doPassword(str)
console.log(result);

function isTrianglePossible(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

// Пример использования
console.log(isTrianglePossible(3, 4, 5)); // true
console.log(isTrianglePossible(1, 1, 10)); // false
console.log(isTrianglePossible(6, 8, 12)); // true. 6
