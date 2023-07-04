//  На вход программе подаётся строка. Замените все @ на '!' (2 способа)



let a = prompt();

console.log((isNaN(a)) ? a.replaceAll("@", "!") : 'Ошибка');

console.log(isNaN(a) ? a.split("@").join("!") : 'Ошибка');