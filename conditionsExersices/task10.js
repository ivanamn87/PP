// Task 10. Write a JavaScript program to check a given integer is within 20 of 100 or 400,
// and print range in which number belongs.
// Sample Input: 13 Sample Input: 34 Sample Input: 256
// Output : - Output : 20 ⇔ 100 Output : 100 ⇔ 400
​
var broj = 60;
if(broj>=20 && broj <=100){
    console.log("Output: " + broj + " je izmedju 20 <==> 100");
} else if (broj>=100 && broj <=400){
    console.log("Output: " + broj + " je izmedju 100 <==> 400");
};
​