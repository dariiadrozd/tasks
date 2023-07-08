// На вход подается 1 слово. Необходимо преобразовать слово в хештег. Добавить
// проверку на ввод текстовых значений
// hSСhOol -> #hschool

let a = 'hSСhOol';
if (!isNaN(a)) {
    console.log("error");
} else {
    console.log("#", a.toLowerCase());
}