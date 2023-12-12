//Создайте класс Student, который содержит проинициализированные свойства name (имя) и age (возраст). Создайте экземпляр класса Student и выведите свойства.

class Student{
    name:string = 'Vania';
    age: number = 19;
}

const student = new Student()
console.log(student.name);
console.log(student.age);

