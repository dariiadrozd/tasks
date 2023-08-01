// На входе статичный объект. 
// Необходимо посчитать количество пар (ключ: значение)

const obj ={
    name:"Darya",
    age:18,
    secondname:"Drozd",
};

let count = 0;

for(let key in obj){
    if(obj[key]){
        count++
    }
}
console.log(count);
