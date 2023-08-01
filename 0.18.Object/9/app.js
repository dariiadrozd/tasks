// На входе статичный объект. 
// Необходимо посчитать количество пар (ключ:значение) 
// где значение число и вывести количество

const obj = {
    name: "Darya",
    age: 18,
    secondname: "Drozd",
    city: "Warszawa",
    weight: 48,
    height: 162,
};

let count = 0;

for (let key in obj) {
    if (!isNaN(obj[key])) {
        count++
    }
}

console.log(count);