//Напишите функцию isPalindrome(word: string): boolean, которая принимает слово и возвращает true, если оно является палиндромом (читается одинаково слева направо и справа налево), и false в противном случае.

function isPalindrome(word: string | number): boolean {
    try {
        if (!word) throw new Error('empty')
        if (typeof word === 'number') throw new Error('word must be a string')
        return word == word.split('').reverse().join('') ? true : false;
    } catch (error: any) {
        return error.message
    }
}

//2. Напишите функцию calculateFactorial(n: number): number, 
//которая принимает число n и возвращает его факториал.

function calculateFactorial(n: any): number {
    try {
        if (!n) throw new Error('empty value')
        if (typeof n != 'number') throw new Error('TypeError')
        if (n <= 1) return 1
        return n * calculateFactorial(n - 1)
    } catch (error) {
        return error.message
    }

}

//3. Напишите функцию capitalizeString(str: string): string, 
//которая принимает строку и возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str: any): string {
    try {
        if (typeof str != "string") throw new Error('must be a string')
        if (!str) throw new Error('empty')
        let newStr = str.split(' ')
        let res = '';
        for (let i = 0; i < newStr.length; i++) {
            res += newStr[i][0].toUpperCase() + newStr[i].slice(1);
        }
        return res
    } catch (error) {
        return error.message
    }
}

//8. СоздайтеклассStringArray,которыйимеетсвойствоarray(массивстрок)
//иметоды: getLongestWord(): string - возвращает самое длинное слово из массива. getUniqueWords(): string[] - возвращает массив уникальных слов из массива.

class StringArray {
    array: string[] = ['hi', 'hello', 'ki'];

    getLongestWord(): string {
        try {
            let res: string = this.array[0]
            for (let i = 0; i < this.array.length; i++) {
                if (res.length < this.array[i].length) {
                    res = this.array[i]
                }
            }
            return res
        } catch (error) {
            return error.message
        }
    }

    getUniquewords(): string[] {
        try {
            let newArr: string[] = []
            for (let i = 0; i < this.array.length; i++) {
                if (!newArr.includes(this.array[i])) {
                    newArr.push(this.array[i])
                }
            }
            return newArr
        } catch (error) {
            return error.message
        }
    }

}


// 4. Напишите функцию flattenArray(array: any[]): any[], 
// которая принимает массив, в котором могут быть вложенные
//  массивы, и возвращает новый массив, в котором все элементы 
//  являются плоским списком без вложенности.

function flattenArray(array: any[]): any[] {
    const arr: any[] = [];

    array.forEach((el) => {
        if (Array.isArray(el)) {
            arr.push(...flattenArray(el));
        } else {
            arr.push(el);
        }
    });

    return arr;
}

//   5. Напишите функцию chunkArray(array: any[], size: number): any[][], 
//   которая принимает массив и число size, и возвращает новый массив, 
//   разделенный на подмассивы указанного размера.

function chunkArray(array: any[], size: number): any[][] {
    const arr: any[][] = [];;
    for (let i = 0; i < array.length; i += size) {
        arr.push(array.slice(i, i + size));
    }
    return arr;
}

//   6. Напишите функцию findMissingNumber(numbers: number[]): number, 
//   которая принимает массив чисел, в котором пропущено одно число из
//    последовательности, и возвращает пропущенное число.

function findMissingNumber(numbers: number[]): number {

    const n = numbers.length + 1;
    const sum = (n * (n + 1)) / 2;

    const arr = numbers.reduce((num1, num2) => num1 + num2, 0);

    const res = sum - arr;

    return res;
}

// 9. Создайте класс NumberArray, который имеет свойство array (массив чисел) и методы:
// getSum(): number - возвращает сумму всех чисел в массиве.
// getEvenNumbers(): number[] - возвращает массив только четных чисел из массива.

class NumberArray {
    private array: number[];
  
    constructor(array: number[]) {
      this.array = array;
    }
  
    getSum(): number {
      return this.array.reduce((sum, num) => sum + num, 0);
    }
  
    getEvenNumbers(): number[] {
      return this.array.filter(num => num % 2 === 0);
    }
  }


//  10. Создайте класс PersonArray, который имеет свойство array (массив объектов Person) и методы:
//     getNames(): string[] - возвращает массив имен всех людей.
//     getAdults(): Person[] - возвращает массив только совершеннолетних людей. 
//     getAverageAge(): number - возвращает средний возраст всех людей.

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }
  
  class PersonArray {
    array: Person[];
  
    constructor(array: Person[]) {
      this.array = array;
    }
  
    getNames(): string[] {
      return this.array.map(person => person.name);
    }
  
    getAdults(): Person[] {
      return this.array.filter(person => person.age >= 18);
    }
  
    getAverageAge(): number {
      const totalAge = this.array.reduce((acc, person) => acc + person.age, 0);
      return totalAge / this.array.length;
    }
  }

export { calculateFactorial, isPalindrome, capitalizeString, StringArray, flattenArray, chunkArray, findMissingNumber, NumberArray,Person, PersonArray }