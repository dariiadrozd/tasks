import { StringArray, calculateFactorial, capitalizeString, isPalindrome } from './app';

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

describe('test stringArray class',()=>{
    test("test getLongest function",()=>{
        const stringArray = new StringArray()
        const res = stringArray.getLongestWord()
        expect(res).toBe('hello');
    })

    test("test getUniqueWords function",()=>{
        const stringArray = new StringArray()
        const res = stringArray.getUniquewords()
        expect(res).toEqual(['hi','hello','ki']);
    })
})
