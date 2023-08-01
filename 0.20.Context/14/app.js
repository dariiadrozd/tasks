// Напишите функцию, генерирующую пароль из 8 символов. (Math.random)

function doPassword() {
    let str = '';
    for (let i = 0; i < 8; i++) {
        let num = Math.round(Math.random() * 9);
        str += num;
    }
    return str;
}
const result = doPassword();
console.log(result);