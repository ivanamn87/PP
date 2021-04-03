/*   1. Write a program that 
calculates the maximum of two given numbers.     */

function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}


var max = maxOfTwoNumbers(5, 10);

console.log(max);





/* 2.  Write a program that checks if a given number is odd.     */

function isNumberOdd(number) {
    return number % 2 !== 0

}

var num = isNumberOdd(7);
console.log(num);






/* 3.   Write a program that checks if 
 a given number is a three digit long number.       */

function isThreeDigit(num) {
    if ((num >= 100 && num <= 999) || (num <= -100 && num >= -999)) {
      return "three digit number";
    } else {
      return "not three digit number";
    }
  }
  
  console.log(isThreeDigit(-500));
  

// 2. nacin

function isThreeDigit(num) {
    if ((num / 10 >= 10 && num / 10 < 100) || (num / 10 <= -10 && num / 10 > -100)) {
      return "three digit number";
    } else {
      return "not three digit number";
    }
  }
  
  console.log(isThreeDigit(-552));
  




/* 4.  Write a program that calculates an arithmetic mean of four numbers.   */

function calculateAverage() {
        var sum = 0;
        for (var i = 0; i < arguments.length; i++) {
          sum += arguments[i];
        }
        return sum / 4;
      }
      
      console.log(calculateAverage(2, 4, 6, 8));
      





/*  5. Write a program that draws a square of a given size. 
For example,  if the size of square is 5 the program should draw: 
 *****
 *    *
 *    *
 *    *     
 *****                   */

function drawASquare(n) {
    var square = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (i === 0 || i === n - 1) {
                square += "*";
            } else if (j === 0 || j === n - 1) {
                square += "*";
            } else {
                square += " ";
            }
        }
        square += "\n";
    }

    return square;
}

var square1 = drawASquare(4);
var square2 = drawASquare(5);
var square3 = drawASquare(10);

console.log(square2);




/*   6. Write a program that draws a horizontal chart representing three given values. 
For example, if values are 5, 3, and 7, the program should draw:
 * * * * *
 * * *
 * * * * * * *                          
function print(x, y, z) {
    var prviRed = "";
    var drugiRed = "";
    var treciRed = "";
    for (var i = 0; i < x; i++) {
      prviRed += "* ";
    }
    for (var i = 0; i < y; i++) {
      drugiRed += "* ";
    }
    for (var i = 0; i < z; i++) {
      treciRed += "* ";
    }
    return console.log("", prviRed, "\n", drugiRed, "\n", treciRed);
  }
  
  console.log(print(5, 3, 7));  */

  function print() {
    var result = "";
    var numOfArgs = arguments.length;
  
    for (var i = 0; i < numOfArgs; i++) {
      for (var j = 0; j < arguments[i]; j++) {
        result += "* ";
      }
      result += "\n";
    }
  
    return result;
  }
  
  console.log(print(5, 3, 7, 8, 5, 10));
  




/*  7.    Write a program that calculates a number of digits of a given number.   */

function numDig(a) {
    var brojcifara = 0;
    if (a >= 0) {
        brojcifara++;
    }
    while (a / 10 >= 1) {
        a /= 10;
        brojcifara++;
    }
    return brojcifara;
}
console.log(numDig(567897));





/*  8.   Write a program that calculates a number of appearances of a given number in a given array.
Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
Result: 3                           */


var a = [2, 4, 7, 8, 7, 7, 1];

function numApp(e) {
    var c = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] === e) {
            c++;
        }
    }
    return c;
}

console.log(numApp(7));






/*  9.  Write a program that calculates the sum of odd elements of a given array.                        */

function sumOfOdd(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i] % 2 === 1) {
            sum += a[i];
        }
    }
    return sum;
}
console.log(sumOfOdd([2, 4, 6, 7, 8, 9, 1, 2]));






/*  10. Write a program that calculates the number of appearances of a letter a in a given string. 
Modify the program so it calculates the number of both letters a and A.                              */

function numOfApp(string) {
    var total = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            total++;
        }
    }
    return total;
}

console.log(numOfApp("ananas"));

// odvojeno

function numOfApp(string) {
    var totalSmall = 0;
    var totalBig = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "a") {
            totalSmall++;
            var x = "The total number of lower s is " + totalSmall;
        } else if (string[i] === "A") {
            totalBig++;
            var y = "The total number of capital A is " + totalBig;
        }
    }
    return [x, y];
}

console.log(numOfApp("anAnas"));





/*  11. Write a program that concatenates a given string given number of times. 
For example, if “abc” and 4 are given values, the program prints out abcabcabcabc.                   */

function concat(a, b) {
    var final = "";
    for (var i = 1; i <= b; i++) {
        final += a;
    }
    return final;
}
console.log(concat("dabc", 12));
