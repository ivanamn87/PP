// Task 8. Write a JavaScript program to compute the sum of the two given integers. If the two
// values are same, then returns triple their sum.
// Sample Input: 12,5 Sample Input: 8,8
// Output : 17 Output : 48
​
var number1 = 5;
var number2 = 10;
​
if(number1===number2){
    console.log((number1+number2)*3);
} else {
    console.log(number1+number2);
}