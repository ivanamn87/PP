// Task 12. Write a program to check if the
// number is divisible by 3 and 5.
// If it is, print that number.
​
// Sample numbers: 15, 12 (check one at the time)
​
// Output: 15
​
var num4 = 15;
var num5 = 12;
​
if (num4 % 3 ===0 && num4 % 5 === 0){
    console.log("The number " + num4 + " is divisible by 3 and 5")
} else if (num4 % 3 === 0){
    console.log("The number " + num4 + " is divisible by 3 and but not 5")
} else if  (num4 % 5 === 0){
    console.log("The number " + num4 + " is not divisible by 3 but is divisible by 5")
} else {
    console.log("The number " + num4 + " is not divisible by 3 and 5")
}