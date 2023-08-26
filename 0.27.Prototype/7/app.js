// Возле дороги стоят столбы. Расстояние между столбами одинаковое и ширина столбов одинаковая. 
// По условию задачи даны 3 инпута и кнопка.
// По клику на кнопку вызывается функция, принимающая три параметра: 
// количество столбов (≥ 1); расстояние между столбами (10 – 30 метров); ширина столба (10 – 50 сантиметров). 
// Рассчитайте расстояние между первым и последним столбом в сантиметрах

const btn = document.querySelector('button');
const result = document.querySelector('p')

btn.addEventListener('click', function () {
    const NumberOfColumns = document.querySelector('.NumberOfColumns');
    const ColumnSpacing = document.querySelector('.ColumnSpacing');
    const ColumnWidth = document.querySelector('.ColumnWidth');

    try {
        const firstValue = +NumberOfColumns.value;
        const secondValue = +ColumnSpacing.value;
        const thirdValue = +ColumnWidth.value;

        if (firstValue < 1) {
            throw new Error("Количество столбов должно быть больше или равно 1")
        }
        if (secondValue < 10 || secondValue > 30) {
            throw new Error('Расстояние между столбами должно составлять от 10 до 30 м.')
        }

        if (thirdValue < 10 || thirdValue > 50) {
            throw new Error('Ширина столба должна составлять от 10 до 50 см.')
        }

        result.textContent = distance(firstValue, secondValue, thirdValue);
    } catch (error) {
        result.textContent = error.message;
    }
});

function distance(columns, spacing, width) {
    let totalDistance = width;

    for (let i = 1; i < columns - 1; i++) {
        totalDistance += spacing * 100 + width;
    }
    totalDistance += spacing * 100;

    return `Расстояние между первым и последним столбом: ${totalDistance} сантиметров`
}