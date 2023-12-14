//Создайте абстрактный класс Shape, содержащий абстрактный метод calculateArea(). Напишите дочерний класс Rectangle, который наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Затем создайте объект класса Rectangle и выведите его площадь на экран. (для вычисления площади прямоугольника S = height * wigth)

abstract class Shape {
   abstract calculateArea(): number;
}

class Rectangle extends Shape{
    height: number;
    width:number
    calculateArea():number{
        return this.height * this.width
    }
}

const rectangle = new Rectangle();
rectangle.width = 5
rectangle.height = 10
console.log(rectangle.calculateArea());

