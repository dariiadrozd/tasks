// Напишите функцию, которая принимает 
// строку в маленьком регистре и возаращает строку, 
// где каждое слово начинается с большого регистра 
// hschool company -> Hschool Company


const str = "hschool company".split(' ');
function doUpperCase(string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        result += string[i][0].toUpperCase() + string[i].slice(1) + ` `;
    }
    return result
}
let end = doUpperCase(str);

console.log(end);