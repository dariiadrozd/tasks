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

// 

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

    getLongestWord():string {
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


export { calculateFactorial, isPalindrome, capitalizeString, StringArray }