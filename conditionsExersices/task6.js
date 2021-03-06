
// Task 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
// Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
// Sample Input: 60°C
// Output : 60°C is 140 °F
​
var C = 60;
var F = 140;
​
var toFar = (9*C/5) + 32;
var toCel = (F - 32)*5/9;

console.log(C+ " Celsius is " + toFar + " Fahrenheit");
console.log(F+ " Fahrenheit is " + toCel + " Celsius");


//2.nacin

var C;
var F = 140;

var direction = 'F to C'

if(direction !== 'F to C'){
    console.log(9*C/5) + 32;
} else {
    console.log(F-32/1.8);
}