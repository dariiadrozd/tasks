//Создайтепеременнуюstrиприсвойтеейстроковоезначение.Используяциклfor выведите каждый символ строки и его индекс.

let strr: string = "Hello world";

for (let i = 0; i < strr.length; i++) {
    console.log(`Индекс: ${i}, Символ: ${strr[i]}`);
}