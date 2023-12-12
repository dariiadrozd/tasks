//Создайте класс Student, который содержит свойства name (имя) и age (возраст). Инициализация свойств name, age происходит в getter, setter класса. Создайте экземпляр класса Student и выведите свойства.

class Student4 {
    name: string;
    age: number
    setName(name: string): void {
        this.name = name;
    }

    setAge(age: number): void {
        this.age = age;
    }

    getName(): string {
        return this.name
    }

    getAge(): number {
        return this.age
    }
}

const student4 = new Student4()

student4.setName('Lola')
student4.setAge(12)

console.log(student4.name);
console.log(student4.age);


