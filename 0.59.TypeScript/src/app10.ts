//Напишите программу, которая определяет, является ли заданная строка анаграммой (состоит из тех же символов, но в другом порядке) другой строки.

function areAnagrams(str1: string, str2: string): boolean {

    const cleanStr1 = str1.replace(/\s/g, "").toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, "").toLowerCase();

    const sortedStr1 = cleanStr1.split("").sort().join("");
    const sortedStr2 = cleanStr2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
}

const string1: string = "listen";
const string2: string = "silent";

console.log(`Строка 1: ${string1}`);
console.log(`Строка 2: ${string2}`);
console.log(`Являются ли строки анаграммами? ${areAnagrams(string1, string2)}`);