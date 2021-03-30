
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