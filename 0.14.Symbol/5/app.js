// На вход подается url. Необходимо вывести содержимое url после протокола
// (http/https)
let a = "https://www.instagram.com/hschool.official/";
console.log(a.slice(a.indexOf("/") + 2));