const input = document.getElementById("numberInput");
const button = document.getElementById("doubleButton");
const resultDiv = document.getElementById("result");

button.addEventListener("click", function() {
    const inputValue = input.value;

    if (!inputValue.trim()) {
        alert("Введите число!");
        return;
    }

    const parsedNumber = parseFloat(inputValue);

    if (isNaN(parsedNumber)) {
        alert("Введите корректное число!");
        return;
    }

    const doubledValue = parsedNumber * 2;
    resultDiv.textContent = `Результат: ${doubledValue}`;
});



const button = document.getElementById("myButton");

button.addEventListener("click", function() {
    button.style.backgroundColor = "green";
});





