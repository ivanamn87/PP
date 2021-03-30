// task1 

// Write a program that shows text representation of a day in a week for a number input from 1 to 7. Print output in console. 
// For input 1, output should be “Monday”.

var day = "4";

switch (day) {
    case "1":
        result("Monday");
        break;
    case "2":
        result("Tuesday");
        break;
    case "3":
        result("Wednesday");
        break;
    case "4":
        result("Thursday");
        break;
    case "5":
        result("Friday");
        break;
    case "6":
        result("Saturday");
        break;
    case "7":
        result("Sunday");
        break;
    default:
        result("Invalid input");
        break;

}

//task 2

// Write a program that shows text representation of a day in a week for a number input from 1 to 7. All other cases output a message explaining that input must be a number between 1 and 7.
// For input 1, output should be “Monday”.
// For input 10, output should be “Input must be a number between 1 and 7”.



var day = "4";

switch (day) {
    case "1":
        result("Monday");
        break;
    case "2":
        result("Tuesday");
        break;
    case "3":
        result("Wednesday");
        break;
    case "4":
        result("Thursday");
        break;
    case "5":
        result("Friday");
        break;
    case "6":
        result("Saturday");
        break;
    case "7":
        result("Sunday");
        break;
    default:
        result("Invalid input! Please insert between 1-7.");
        break;

}

// task 3

// Write a program that for a 1-7 number input (representing a day in a week) shows if that day is a weekday or weekend. All other cases output a message explaining that input must be a number between 1 and 7.
//		For input 2, output should be “It’s weekday”.
//        For input 6, output should be “It’s weekend”.
//        For input 12, output should be “Input must be number between 1 and 7”.
        

var day = "4";

switch (day) {
    case "1":
        result("It’s weekday");
        break;
    case "2":
        result("It’s weekday");
        break;
    case "3":
        result("It’s weekday");
        break;
    case "4":
        result("TIt’s weekday");
        break;
    case "5":
        result("It’s weekday");
        break;
    case "6":
        result("It’s weekend");
        break;
    case "7":
        result("It’s weekend");
        break;
    default:
        result("Invalid input! Please insert between 1-7.");
        break;

}

// task 4

// Write a program that for a 1-12 number input (representing a month in a year) shows that month’s name.
//  All other cases output a message explaining that input must be a number between 1 and 12. 
//		For input 2, output should be “February”.
//       For input 6, output should be “June”.
//       For input 13, output should be “Input must be a number between 1 and 12”
        

var month = "4";

switch (month) {
    case "1":
        result("It’s january");
        break;
    case "2":
        result("It’s february");
        break;
    case "3":
        result("It’s march");
        break;
    case "4":
        result("It’s april");
        break;
    case "5":
        result("It’s may");
        break;
    case "6":
        result("It’s jun");
        break;
    case "7":
        result("It’s july");
        break;
    case "8":
        result("TIt’s august");
        break;
    case "9":
        result("It’s september");
        break;
    case "10":
        result("It’s oktober");
        break;
    case "11":
        result("It’s november");
        break;
    case "12":
            result("It’s december");
            break;  
    default:
        result("Invalid input! Please insert between 1-12.");
        break;

}

// task 5

// Write a program that for a 1-12 number input (representing a month in a year) shows what season it is. All inputs different from 1-12 output a message explaining that input must be a number between 1 and 12. 

var month = "4";

switch (month) {
    case "1":
        result("It’s winter");
        break;
    case "2":
        result("It’s winter");
        break;
    case "3":
        result("It’s spring");
        break;
    case "4":
        result("It’s spring");
        break;
    case "5":
        result("It’s spring");
        break;
    case "6":
        result("It’s summer");
        break;
    case "7":
        result("It’s summer");
        break;
    case "8":
        result("TIt’s summer");
        break;
    case "9":
        result("It’s autumn");
        break;
    case "10":
        result("It’s autumn");
        break;
    case "11":
        result("It’s autumn");
        break;
    case "12":
            result("It’s winter");
            break;  
    default:
        result("Input must be a number between 1 and 12");
        break;

}



// task 6 

// Write a program that for a string input of a grade from “A”-“F” outputs a proper info message about that grade in the following manner: A - "Good job"", B - "Pretty good"", C - "Passed"", D - "Not so good"", F - "Failed". Input different from letters A-F outputs a message "Unknown grade".

var grade = "A";

switch (grade) {
    case "A":
        result("Good job");
        break;
    case "B":
        result("Pretty good");
        break;
    case "C":
        result("Passed");
        break;
    case "D":
        result("Not so good");
        break;
    case "F":
        result("FAILLED");
        break;
    default:
        result("Unknown grade");
        break;

}

// task 7

// Write a program that takes as input a city name and outputs the country where the city is. 
// You may choose which cities and countries you want to output yourself, however there has to be at least 5 countries and 15 cities. 
// Note that each country must have a different number of cities. 
// Input different from the listed cities should output a message "Please choose a different city".


var city = "Beograd";

switch (city){
    case "Beograd":
    case "Nis":
    case "Novi Sad":
        console.log("Srbija");
        break;
    case "Zagreb":
    case "Osjek":
    case "Split":
    case "Zadar":
        console.log("Hrvatska");
        break;
    case "Ljubljana":
    case "Maribor":
        console.log("Slovenija");
        break;

        default:
            console.log("Please choose a different city");
}

// task 8.

// Write a program that takes as input two numbers 
// and a string denoting the operation (“+”, “-”, “*”, “/”) 
// and prints out the appropriate result. 
// Watch out for division by zero!


var number1 = 10;
var number2 = 2;
var sign = "/";

switch (sign) {
  case "+":
    console.log(number1 + number2);
    break;

  case "-":
    console.log(number1 - number2);
    break;

  case "*":
    console.log(number1 * number2);
    break;

  default:
    if (sign === "/" && number2 !== 0 && number1 !== 0) {
      console.log(number1 / number2);
    } else {
      console.log("One number is 0 and division is not possible");
    }
}


