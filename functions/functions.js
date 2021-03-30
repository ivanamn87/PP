/*  1. PRIMER         */

function getMinElementFromArray(array){
    var min = array[0];
    for (var i=1; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}


var arr = [222, 3, -4, 55, -12, 120, -6];

var result = getMinElementFromArray(arr);

console.log(result);



/*  2. PRIMER DEFINISANJA F-JE  */ 

function isEven(broj){
    if(broj % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(10));
console.log(isEven(7));
console.log(isEven(22));




/*  3. PRIMER  */

function isInArray(niz, element){       /* da li niz sadrzi element */
    for (var i = 0; i < niz.length; i++){
        if (niz[i] === element ){
            return true;
        }
    } 
    return false;
}

console.log(isInArray([1,2,3], 2));
console.log(isInArray([1,2,3], 4));
console.log(isInArray([1,2,3,22,55], 22));


