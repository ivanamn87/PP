// 1. Write a for loop that will iterate from 0 to 15.
//For each iteration, it will check if the current number is odd or even, and display a message to the screen.

for (var x=0; x<=15; x++) {
    if (x === 0) {
            console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(x + " is even");   
    }
    else {
            console.log(x + " is odd");
    }
}




// 2. Write a program to sum the multiples of 3 and 5 under 1000.

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 && x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);





// 3. Write a program to compute the sum and product of an array of integers.

var array = [1, 2, 3, 4, 5, 6],
    s = 0,
    p = 1,
    i;
for (i = 0; i < array.length; i += 1) 
   {
    s += array[i];
    p *= array[i];
    }
console.log('Sum : '+s + ' Product :  ' +p); 





// 4. Write a program which prints the elements of the following array as a single string.
//        var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];

var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];






// 6. Write a program that outputs the sum of squares of the first 20 numbers. 

var sum = 0;
for(var i = 0; i <= 20; i++) {
    sum += i * i; 
}

console.log(sum);


// 7.  PROSECNA OCENA

var marks = [80, 77, 88, 95, 68];
var sum = 0;

for(var i = 0; i < marks.length; i++) {
    sum += marks[i]; 
}

var average = sum / marks.length;

// console.log(average);

if (average < 60) {
    console.log("F");
}
else if (average < 70) {
    console.log("D");
}
else if (average < 80) {
    console.log("C");
}
else if (average < 90) {
    console.log("B");
}
else {
    console.log("A");
}






// 8. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// Note: This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you’ve solved it, you’re now allowed to feel good about yourself.

for(var i = 0; i <= 100; i++) {
    if(i % 3 === 0 && i % 5 !== 0) {
        console.log("Fizz");
    }
    else {
        if(i % 5 === 0 && i % 3 !== 0) {
            console.log("Buzz");
        }
        else {
            if(i % 5 === 0 && i % 3 === 0) {
                console.log("FizzBuzz");
            }
            else {
                console.log(i);
            }
        }
    }     
}



