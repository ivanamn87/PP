// Task 7. Write a JavaScript program to get the difference between a given number and 13, if
// the number is greater than 13 return double difference between that number and 13.
// Sample Input: 11 Sample Input: 32
// Output : 2 Output : 38
​
var given = 15;
var number = 13;
​
if(number<given){
    console.log((given-number)*2);
} else {
    console.log(number-given);
}

// 2. nacin

var num = 32;

if (num<=13){
    console.log(13 - num);
}else {
    console.log((num - 13) * 2);
}