//Создайте переменную grade и присвойте ей значение от 1 до 5. Используя оператор switch, выведите в консоль описание оценки (например, "Отлично", "Хорошо" и т.д.) в зависимости от значения переменной grade.

const grade: number = +prompt("введите значение");

switch (grade) {
  case 1:
    console.log("Плохо");
    break;
  case 2:
    console.log("Нормально");
    break;
  case 3:
    console.log("Хорошо");
    break;
  case 4:
    console.log("Отлично");
    break;
  case 5:
    console.log("Превосходно");
    break;
  default:
    console.log("Ошибка");
}