// Пользователь вводит имя фамилию. 
// Необходимо создать функцию возвращающую строку вида 
// «Привет, {имя} {фамилия}»

function sayHello(a, b) {
    return `привет, ${a} ${b}`;
}

const result = sayHello("Дарья", "Дрозд");
console.log(result);

const result_1 = sayHello("Иван", "Шутко");
console.log(result_1);