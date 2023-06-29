//  Выявить является ли введенное число четным

let a = prompt("введите число");

if (a % 1 == 0) {
    console.log("четное");
} else {
    console.log("нечетное");
}

a % 2 == 0 ? console.log("четное") : console.log("нечетное");

console.log(a % 2 == 0 ? "четное" : "нечетное");