/* TASK 1: Write a function that checks if a given string contains digit 5.
Input: “1b895abd” 
Output: true
Input: “1bser9re”
Output: false                                                                */


function checkForFive(string) {
    var result;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "5") {
            result = true;
            break;
        } else {
            result = false;
        }
    } return result;
}
console.log(checkForFive("1b895abd"));
console.log(checkForFive("1bser9re"));





/* TASK 2: Write a function that in a given string replaces all the appearances of the string ‘JS’ with ‘**’.
Input: “Programming in JS is super interesting!”
Output: “Programming in ** is super interesting!”                             */


function replaceJSWithStars(string) {           //This function replaces string "JS" in each string whenever they are found
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (string[i] != "J" && string[i] != "S") {
            result += string[i];
            for (var j = i; j < i + 2; j++) {
                if (string[j] == "J" && string[j + 1] == "S") {
                    result += "**";
                }
            }
        }
    } return result;
}
console.log(replaceJSWithStars("Programming in JS is super interesting!"))
console.log(replaceJSWithStars("ProgJSrammiJSng JSin JS is super interesting!"))





/* TASK 3: Write a function that inserts a given character on a given position in the string.
Input: “Goo morning”, 4, ‘d’
Output: “Good morning”                                 */


function insertCharacterOnPosition(string, position, character) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (i < (position - 1)) {
            result += string[i];
        } else if (i == (position - 1)) {
            result += character;
            result += string[i];
            //we need to write result += string[i]; because after it includes character on that position it needs to also   add a character that was previously on that position
        } else {
            result += string[i];
        }
    }
    if (position > string.length) {         //this IF code includes case when we want to add character on the end of string
        result += character;

    } return result;
}
console.log(insertCharacterOnPosition("Goo morning", 4, "d"));
console.log(insertCharacterOnPosition("This is a funcio", 17, "n"));





/* TASK 4: Write a function that deletes a character from the given position in the string.
Input: “Goodd morning!”, 3
Output: “Good morning!”                              */

function deleteCharacterFromPosition(string, position) {
    var result = "";
    for (var i = 0; i < string.length; i++) {
        if (i != position) {
            result += string[i];
        }
    } return result;
}
console.log(deleteCharacterFromPosition("Goodd morning!", 3))





/* TASK 5: Write a function that deletes every second element of the given array.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67]
Output: [3, 1, 90, 23, 67]                     */

function deleteEverySecond(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            result[result.length] = array[i];
        }
    }
    return result;
}
console.log(deleteEverySecond([3, 5, 1, 8, 90, -4, 23, 1, 67]));





/* TASK 6: Write a function that replaces the elements of the given array between two positions with their doubled values.
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]                */


function replaceElementsWithDouble (array, position1, position2) {
    var result = [];
    for(var i = 0; i < array.length; i++) {
        if(i >= position1 && i <= position2) {
            result[result.length] = array[i] * 2;
        } else result[result.length] = array[i];
    }
    return result;
}
console.log(replaceElementsWithDouble([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

