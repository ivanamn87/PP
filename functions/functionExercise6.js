// TASK 1: Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U.

function countVowels(string) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u" || string[i] == "A" || string[i] == "E" || string[i] == "I" || string[i] == "O" || string[i] == "U") {
            count++;
        }
    } return count;
}
console.log(countVowels("Vowels are a, e, i, o, and u as well as A, E, I, O, and U"));





// TASK 2: Write a function that combines two arrays by alternatingly taking elements.
// [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

function combineAndAlternateArrays(array1, array2) {
    var result = [];
    index1 = 0;
    index2 = 1;
    for (i = 0; i < array1.length; i++) {
        result[index1] = array1[i];
        index1 += 2;
    }
    for (j = 0; j < array2.length; j++) {
        result[index2] = array2[j];
        index2 += 2;
    } return result;
}
console.log(combineAndAlternateArrays(['a', 'b', 'c'], [1, 2, 3]));





// TASK 3: Write a function that rotates a list by k elements.
// For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

function rotateListByElements(list, numberOfElements) {
    var result = [];
    for (i = 0; i < list.length; i++) {
        if (i >= numberOfElements) {
            result[result.length] = list[i];
        }
    }
    for (j = 0; j < list.length; j++) {
        if (j < numberOfElements) {
            result[result.length] = list[j];
        }

    } return result;
}
console.log(rotateListByElements([1, 2, 3, 4, 5, 6], 2));





// TASK 4: Write a function that takes a number and returns array of its digits.

function returnArrayOfDigits(number) {
    var result = [];
    var newNum = "";
    if (typeof number === "number") {
        newNum = number + ""
    }
    for (i = 0; i < newNum.length; i++) {
        result[result.length] = newNum[i];

    } return result;
}
console.log(returnArrayOfDigits(5120));




// TASK 5: Write a program that prints a multiplication table for numbers up to 12.

function multiplicationTable(num) {
    var result = "";
    for (i = 1; i <= num; i++) {
        for (j = 1; j <= num; j++) {
            var j;
            result += (i * j) + " ";
        } result += "\n"
    } return result;
}
console.log(multiplicationTable(12));