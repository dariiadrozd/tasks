// На вход программе подается строка. 
// Напишите программу, которая меняет регистр символов, 
// другими словами замените все строчные символы заглавными и наоборот. Swap Case => sWAPcASE

let a = prompt('ввод');

for (let i = 0; i < a.length; i++) {
    if (a[i] === a[i].toUpperCase()) {
        console.log(a[i].toLowerCase());
    } else {
        console.log(a[i].toUpperCase());
    }
}