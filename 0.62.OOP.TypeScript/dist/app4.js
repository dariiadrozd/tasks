//Создайте класс Student, который содержит свойства name (имя) и age (возраст). Инициализация свойств name, age происходит в getter, setter класса. Создайте экземпляр класса Student и выведите свойства.
class Student4 {
    name;
    age;
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
const student4 = new Student4();
student4.setName('Lola');
student4.setAge(12);
console.log(student4.name);
console.log(student4.age);
