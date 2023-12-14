// Создать интерфейс iValidation. Создайте класс Validation с публичными методами 
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса Validation. 
// Конструктор принимает поля email, date, path и инициализирует их как поля класса. 
// В каждом методе напишите соответствующую проверку
class Validation {
    email;
    date;
    path;
    constructor(email, date, path) {
        this.email = email;
        this.date = date;
        this.path = path;
    }
    isValidEmail() {
        try {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/gm.test(this.email))
                throw new Error('email is not found');
            console.log(true);
        }
        catch (error) {
            console.log(error.message);
        }
    }
    isValidDate() {
        try {
            if (!/^[A-Z]{1}\:\/\/[a-zA-Z]+\//gm.test(this.path))
                throw new Error('date is not found');
        }
        catch (error) {
            console.log(error.message);
        }
    }
    isValidPath() {
        try {
            if (!/^[A-Za-z]:\/\/[A-Za-z0-9_]+\/$/gm.test(this.path))
                throw new Error('path is not found');
        }
        catch (error) {
            console.log(error.message);
        }
    }
}
const validation = new Validation('daria@gmail.com', '14.12.2023', 'C://admin/');
validation.isValidDate();
validation.isValidEmail();
validation.isValidPath();
