//Создайте класс Rectangle, который содержит свойства width (ширина) и height (высота), а также метод getArea(), который возвращает площадь прямоугольника (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.
class Rectangle {
    width;
    height;
    // 1
    // constructor(wid: number, hei: number) {
    //     this.width = wid;
    //     this.height = hei
    // }
    getArea() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle();
// 2
// rectangle.height = 25;
// rectangle.width = 4
console.log(rectangle.getArea());
