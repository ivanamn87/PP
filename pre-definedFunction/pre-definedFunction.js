/* TASK 1: 
Write a function that converts an array of strings into an array of numbers.
Filter out all non-numeric values.
Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000] */

function convertAndFilter (arr){
    var result = [];

    for (var index = 0; index < arr.length; index++){
        var converted = parseFloat (arr[index]);
        if (isFinite(converted)) {
            result[result.length] = converted;
        }
    }
    return result;
}

console.log(convertAndFilter(["1", "21", undefined, "42", "1e+3", Infinity]));

// 2. nacin

var array = ["1", "21", undefined, "42", "1e+3", Infinity];

function isNumber(array) {
    var result = [];
    var j = 0;
    for (var i = 0; i < array.length; i++) {
        var parse = parseFloat(array[i]);
        if (isFinite(parse)) {
            result[j] = parse;
            j++;
        }
    } return result
}

console.log(isNumber(array));


console.log(parseFloat(Infinity)); //Infinity
console.log(isFinite(Infinity)); //false

console.log(typeof (isFinite(5))); //boolean because isFinite(5) = true



/* TASK 2: 
Write a program to join all elements of the array into a string 
skipping elements that are undefined, null, NaN or Infinity.

Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: “015false-2247”                                    */


var array = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function joinElements(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (isFinite(array[i]) && array[i] != null) {
            result += array[i];
        }
    } return result;
}

console.log(joinElements(array));


//Another way

function joinElements(array) {
    var result = "";
    for (var i = 0; i < array.length; i++) {
        if (!isNaN(array[i]) && array[i] != null) { //!isNaN throws out NaN, "", undefined from array, while != null throws out null from array
            result += array[i];
        }
    } return result;
}
console.log(joinElements([NaN, 0, 15, false, -22, "", undefined, 47, null]));



/* TASK 3:
Write a program to filter out falsy values from the array.
Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]                                    */

function removeFalsy(arr) {
    return arr.filter(a => !!a);
  }


console.log(removeFalsy([NaN, 0, 15, false, -22, '', undefined, 47, null]));




/* TASK 4:
Write a program that calculates a number of integer values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3                                            */


var array = [NaN, 23.1, 15, false, -22.5, "", 4, 7, null];

function numberOfIntegers(array) {
    var count = 0;
    for (i = 0; i < array.length; i++) {
        var float = parseFloat(array[i]);     //float gives out [NaN, 23.1, 15, NaN, -22.5, NaN, 4, 7, NaN]  
        var int = parseInt(array[i]);         //int gives out   [NaN, 23, 15, NaN, -22, NaN, 4, 7, NaN]
        if (float == int && !isNaN(int)) {    //here we compare those two arrays and we remove the NaN values  
            count++;
        }
    } return count;
}

console.log(numberOfIntegers(array));






/* TASK 5:
Write a program that calculates a number of float values in the array.
Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2                                                    */


function numOfFloat(array) {
    var count = 0;

    for (var i = 0; i < array.length; i++) {
        var y = parseFloat(array[i], 10) // 23,1
        var x = parseInt(array[i], 10) // 23

        if (!isNaN(x) && x != y) {
            count++
        }
    }
    return count;
}

console.log(numOfFloat([NaN, 23.1, 15, false, -22.5, '', 4, 7, null]));