// На вход подается строка '/home/user/dir/file.txt'. Необходимо вернуть имя файла
// (подстрока после последнего символа “/" ) из полного пути к файлу('file.txt')

let a = '/home/user/dir/file.txt';
console.log(a.slice(-8));