import { StringArray, calculateFactorial, capitalizeString, isPalindrome, flattenArray, chunkArray, findMissingNumber, NumberArray,Person,PersonArray } from './app';

describe('test isPalindeom function', () => {
    test('возвразает успех', () => {
        const result = isPalindrome('anna')
        expect(result).toBeTruthy()
    })

    test('возврашает', () => {
        const result = isPalindrome('')
        expect(result).toBe('empty')
    })

    test('to be must be a string', () => {
        const result = isPalindrome(6)
        expect(result).toBe('word must be a string')
    })

})

describe('test calculationFactorial', () => {

    test('to be success', () => {
        const result = calculateFactorial(3)
        expect(result).toBe(6)
    })

    test('to be Empty value', () => {
        const result = calculateFactorial('')
        expect(result).toBe('empty value')
    })

    test('', () => {
        const result = calculateFactorial('hello')
        expect(result).toBe('TypeError')
    })
})

describe('test capitalizeString', () => {
    test('to be success', () => {
        const result = capitalizeString('hello darya')
        expect(result).toBe('HelloDarya')
    })

    test('to be empty', () => {
        const result = capitalizeString('');
        expect(result).toBe('empty');
    })

    test('is not a string', () => {
        const result = capitalizeString(6)
        expect(result).toBe('must be a string')
    })
})

describe('test stringArray class', () => {
    test("test getLongest function", () => {
        const stringArray = new StringArray()
        const res = stringArray.getLongestWord()
        expect(res).toBe('hello');
    })

    test("test getUniqueWords function", () => {
        const stringArray = new StringArray()
        const res = stringArray.getUniquewords()
        expect(res).toEqual(['hi', 'hello', 'ki']);
    })
})

describe('test flattenArray function', () => {

    test("flattenArray test", () => {
        const inputArray = [1, [2, 3, [4, 5, [6, 7]]], 8, [9]];
        const output = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const res = flattenArray(inputArray);
        expect(res).toEqual(output);
    });
});

describe('test chunkArray function', () => {
    test('chunkArray test', () => {
        const result = chunkArray([1, 2, 3, 4, 5], 2);
        expect(result).toEqual([[1, 2], [3, 4], [5]]);
    });

    test('test chunkArray function', () => {
        const result = chunkArray([1, 2, 3, 4, 5], 2);
        expect(result).toBeTruthy();
    });
});

describe('test findMissingNumber function', () => {
    test('return missing number', () => {
        const result = findMissingNumber([1, 2, 3, 5]);
        expect(result).toBe(4);
    });

    test('return truthy value', () => {
        const result = findMissingNumber([1, 2, 3, 5]);
        expect(result).toBeTruthy();
    });
});

describe('test NumberArray function ', () => {
    test('return sum of all numbers in array', () => {
      const numberArray = new NumberArray([1, 2, 3, 4]);
      const result = numberArray.getSum();
      expect(result).toBe(10);
    });
  
    test('should return an array of even numbers from the array', () => {
      const numberArray = new NumberArray([1, 2, 3, 4, 5, 6]);
      const result = numberArray.getEvenNumbers();
      expect(result).toEqual([2, 4, 6]);
    });
  });

  describe("PersonArray", () => {
    test("getNames should return an array of names", () => {
      const people = [new Person("Alice", 25), new Person("Bob", 30)];
      const personArray = new PersonArray(people);
      expect(personArray.getNames()).toEqual(["Alice", "Bob"]);
    });
  
    test("getAdults should return an array of adult persons", () => {
      const people = [new Person("Alice", 25), new Person("Bob", 30), new Person("Eve", 17)];
      const personArray = new PersonArray(people);
      expect(personArray.getAdults()).toEqual([new Person("Alice", 25), new Person("Bob", 30)]);
    });
});