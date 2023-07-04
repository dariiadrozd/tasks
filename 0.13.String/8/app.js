//  Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb'

let a = 'aaa bbb ccc';
let firs_index = a.indexOf("b");
let second_index = a.lastIndexOf("b");
console.log(a.slice(firs_index, second_index + 1));
