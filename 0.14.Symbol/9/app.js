// На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
let str = '123@1@@34';
let resoult = ' ';
for (let i = 0; i < str.length; i++) {
    if (str[i] != '@') {
        resoult += str[i];
    }
}
console.log(resoult);