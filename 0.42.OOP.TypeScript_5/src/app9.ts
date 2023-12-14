// Создать интерфейс iValidation. Создайте класс Validation с публичными методами 
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса Validation. 
// Конструктор принимает поля email, date, path и инициализирует их как поля класса. 
// В каждом методе напишите соответствующую проверку

interface iValidation {
    email: string;
    date: string;
    path: string;

    isValidEmail(): void
    isValidDate(): void
    isValidPath(): void
}

class Validation {
    email: string;
    date: string;
    path: string;

    constructor(email, date, path) {
        this.email = email
        this.date = date;
        this.path = path
    }

    isValidEmail(): void {
        try {
            if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/gm.test(this.email)) throw new Error('email is not found')
            console.log(true);

        } catch (error) {
            console.log(error.message);
        }
    }
    isValidDate(): void {
        try {
            if (!/^[A-Z]{1}\:\/\/[a-zA-Z]+\//gm.test(this.path)) throw new Error('date is not found')
        } catch (error) {
            console.log(error.message);
        }

    }
    isValidPath(): void {
        try {
            if (!/^[A-Za-z]:\/\/[A-Za-z0-9_]+\/$/gm.test(this.path)) throw new Error('path is not found')
        } catch (error) {
            console.log(error.message);

        }
    }
}

const validation = new Validation('daria@gmail.com', '14.12.2023', 'C://admin/')
validation.isValidDate()
validation.isValidEmail()
validation.isValidPath()