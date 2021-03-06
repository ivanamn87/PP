/*  1. Write a conditional statement to find the sign of product of 
three numbers. Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is - */

​
var a = 3;
var b = -7;
var c = 2;


if(a * b * c > 0){
	console.log(" + ");
} else {
	console.log(" - ");
}


// 2.nacin

if (x > 0 && y > 0 && z > 0) {
	console.log("The sign is +");
} else if (x < 0 && y < 0 && z < 0) {
	console.log("The sign is +");
} else if (x > 0 && y < 0 && z < 0) {
	console.log("The sign is +");
} else if (x < 0 && y > 0 && z < 0) {
	console.log("The sign is +");
} else {
	console.log("The sign is -");
}