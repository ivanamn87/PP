
/*  2. Write a conditional statement to find the largest of five numbers. Display the result in the console.
Sample numbers: -5, -2, -6, 0, -1 
Output: 0 */








/*  3. Write a conditional statement to print three numbers as sorted number list.
Sample numbers : 0, -1, 4 
Output : 4, 0, -1  */








/* 4. Write a program to check if the variable is a number and if it’s a number, check if it is divisible by 2. If it is, print the result, if not, show “X”.
Sample input: 10  					Sample input: 7
Output: 10 / 2 = 5					Output: X   */









/* 5. Write a program that compares two numbers and displays the larger. 
Display the result in the console.  */









/* 6. Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
Formula : F = (9*C/5) + 32 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] 
Sample Input: 60°C
	Output : 60°C is 140 °F */









/* 7. Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 return double difference between that number and 13.
	Sample Input: 11					Sample Input: 32
	Output : 2						Output : 38 */









/* 8. Write a JavaScript program to compute the sum of the two given integers. If the two values are same, then returns triple their sum.
	Sample Input: 12,5					Sample Input: 8,8
	Output : 17						Output : 48 */









/* 9. Write a JavaScript program to check two given numbers and print “true” if one of the number is 50 or if their sum is 50.
	Sample Input: 5,54			Sample Input: 6,50			Sample Input: 40,10
	Output : -				Output : true				Output : true  */














/* 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400, and print range in which number belongs.
Sample Input: 13			Sample Input: 34			Sample Input: 256
	Output : -				Output : 20 ⇔ 100			Output : 100 ⇔ 400  */



/* Napisi program koji uporedjuje dva broja i ispisuje veci    */

var x = 21;
var y = 5;
var result;

if (x > y){
	result = x;
} else {
	result = y;
}

console.log ('Broj ' + result + ' je veci');	



// Da li je broj deljiv sa 2
// proveri 3, 4 i 9
// output: odd, even, odd

var num = 9;
var message = '';

if (num % 2 === 0){
    message = 'Number ' + num + ' is even';
} else {
    message = 'Nember ' + num + ' is odd';
}

console.log (message);

// 2.primer

var x = 9;
var y = 4;
var z = 3;

//moze i :

var x = 9, y = 4, z = 3;
var message = '';