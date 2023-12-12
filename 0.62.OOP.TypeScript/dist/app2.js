//Создайте класс Student, который содержит свойства name (имя) и age (возраст). Инициализация свойств name, age происходит с помощью экземпляра класса. Создайте экземпляр класса Student и выведите их свойства.
class Student2 {
    name;
    age;
}
const student2 = new Student2();
student2.name = 'Anton';
student2.age = 22;
console.log(student2.name);
console.log(student2.age);
