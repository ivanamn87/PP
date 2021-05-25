/* TASK 1:  Write a functional expression that duplicates each element of a given array.
Input: [2, 4, 7, 11, -2, 1]
Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]   */

function duplicateArray(array) {
    var result = [];
    array.forEach(function (element) {
        result.push(element, element);
    });
    return result;
}

console.log(duplicateArray([2, 4, 7, 11, -2, 1]));





/* TASK 2: Write a functional expression that removes all duplicates in a given array.
Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
Output: [1, 4, 8, 9, 12, 13]    */

var arr = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];

function removeDuplicates(data) {
    return data.filter((value, index) => data.indexOf(value) === index);
}

console.log(removeDuplicates(arr).sort(function (a, b) {
    return a - b
}));





/* TASK 3: Write a function that checks if a given array has odd number of elements.
Input: [1, 2, 9, 2, 1]
Output: true                      */

function isOddNumberOfElements(array) {
    return array.length % 2 !== 0;
}
console.log(isOddNumberOfElements([1, 2, 9, 2, 1]));



function countNumberOfElementsLessThanMiddle(array) {
    if (array.length % 2 === 0) {
        console.log("Array has even number of elements");
        return;
    }
    var count = 0;
    var midIndex = Math.floor(array.length / 2);

    array.forEach(function (element) {      //element is each element of array
        if (element < array[midIndex]) {
            count++;
        }
    });
    return count;
}
console.log(countNumberOfElementsLessThanMiddle([-1, 8.1, 3, 6, 2.3, 44, 2.11]));





/* TASK 4:  Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
Output: 4                         */

function returnSmallest(array) {
    var min = array[0];
    for (i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    var lastIndex = array.lastIndexOf(min);
    return {
        minElement: min,
        lastIndex: lastIndex,
    }
}

var something = returnSmallest([1, 4, -2, 11, 8, 1, -2, 3]);
console.log(something);




/* TASK 5: 
a) Write a function that finds all the elements in a given array less than a given element. 
	Input: [2, 3, 8, -2, 11, 4], 6 
	Output: [2, 3, -2, 4]    */

var a = [2, 3, 8, -2, 11, 4];
var newArray = [];

function findElem(array, number) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < number) {
            newArray.push(a[i]);
        }
    }
    return newArray;
}

console.log(findElem(a, 6));

/* b) Write a function that finds all the elements in a given array that start with the “pro” substring. The function should be case insensitive. 
		Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
	Output: [’Programming’, ‘product’]                               */

var b = ["JavaScript", "Programming", "fun", "product"];
var newArray = [];

function findString(array, someString) {
    for (var i =0; i < array.length; i++){
        var tempString = array[i];
        var tempStringLower = tempString.toLowerCase ();
        if (tempStringLower.substring(0,3) === someString) {
            newArray.push(array[i]); 
        }
    } 
    return newArray;
}

console.log(findString(b, 'pro'));


/* c) Write a function that expects an array and a callback function that filters out some of the elements. 
Use functions defined in a) or b) to test it. */






/* TASK 6:  
a) Write a list (array) of products you usually buy in the supermarket. Write a price and name for each product. For example,  
var a = [
{name: ‘apples’, price: 100}, 
{name: ‘milk’, price: 80}, 
{name:’bananas’, price: 150}
]             
b) Write a function that calculates the total price of your shopping list. 
c) Write a function that calculates the average product price of your shopping list. Print this value with the precision of three decimals. 
d) Write a function that prints out the name of the most expensive product on your shopping list. Write the name in uppercase. */

// a //
var namirnice = [
    { name: "mleko", price: 120 },
    { name: "hleb", price: 50 },
    { name: "jaja", price: 140 },
  ];
  ​
  // b //
  function getPrice(x) {
    return x.price;
  }
  ​
  function sum(prev, next) {
    return prev + next;
  }
  ​
  console.log(namirnice.map(getPrice).reduce(sum));
  ​
  // c //
  ​
  var total = namirnice.map(getPrice).reduce(sum);
  var average = total / namirnice.length;
  ​
  console.log(average.toFixed(3));
  ​
  // d //
  // sort by price
  var sortirano = namirnice.sort(function (a, b) {
    return b.price - a.price;
  });
  var mostExp = namirnice[0].name;
  var mostExpUpper = mostExp.toUpperCase();
  console.log(mostExpUpper);




/* TASK 7: 
a) Write a function that checks if a given string is written in all capitals.
b) Write a function that checks if a given string contains any digits.
c) Write a function that checks if a given string is a valid hexadecimal color.
d) Write a function that checks if a given number belongs to the interval from 1900 to 2018. 
e) Write a function named validator that returns an object with properties stringValidator, passwordValidator, colorValidator, and yearValidator referencing the functions from a) to d).    */

​
// a //
​
function checkUpperCase(string) {
  if (string === string.toUpperCase()) {
    var result = true;
  } else {
    result = false;
  }
  return result;
}
​
console.log(checkUpperCase("neki string"));
console.log(checkUpperCase("NEKI STRING"));
​
// b //
​
var b = /\d/.test("HelloW123orld!");
console.log(b);
​
// c //
​
function isHexColor(hex) {
  return (
    typeof hex === "string" && hex.length === 6 && !isNaN(Number("0x" + hex))
  );
}
​
console.log(isHexColor("AABBCC")); // true
console.log(isHexColor("AABBCC11")); // false
console.log(isHexColor("XXBBCC")); // false
console.log(isHexColor("AAXXCC")); // false
​
// d //
​
function checkInteval(num) {
  if (num > 1900 && num < 2018) {
    var result = true;
  } else {
    var result = false;
  }
  return result;
}
​
console.log(checkInteval(2019));
​
// e //




/* TASK 8: Write a function that calculates a number of days to your birthday.
Input: 25 February 
Output: 5 days                              */

var myBirthday, today, bday, diff, days;
myBirthday = [17, 04]; // 17th of April
today = new Date();
bday = new Date(today.getFullYear(), myBirthday[1] - 1, myBirthday[0]);
if (today.getTime() > bday.getTime()) {
  bday.setFullYear(bday.getFullYear() + 1);
}
diff = bday.getTime() - today.getTime();
days = Math.floor(diff / (1000 * 60 * 60 * 24));
console.log(days + " days until Ivana's birthday!");





/* TASK 9: Write a function that for a given departure and arrival time calculates the time the trip takes.
	Input: 8:22:13 11:43:22
	Output: 3 hours 21 minutes 9 seconds    */

    var start = new Date("8:22:13");
    var end = new Date("11:43:22");

    var res = Math.abs(date2 - date1);

    console.log(res);


    

/* TASK 10: 
a) Write a constructor function that creates points in space. 
Each point in space has its own x, y, and z coordinate. For example, (3, 5, 1) can be a point in space.

b) Write a function that calculates the distance between two points in the space. 






/* TASK 11: 
a) Write a function that generates a random integer value between 5 and 20.
b) Write a function that generates a random integer value between 50 and 100. 
c) Write a function which expects a number and a callback generator function and 
   returns an array of numbers produced by the generator function.   */






/* TASK 12: Write a function that shuffles the elements of a given array. 
		Input: [3, 6, 11, 2, 9, 1]
		Output: [6, 2, 9, 1, 3, 11]  
        (it can be any random permutation of the given array)      */
