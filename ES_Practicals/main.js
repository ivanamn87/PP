// 1. Write a function that capitalizes the first letter of each string argument it receives.
// Function arguments: ['hello', 'there', 'ES', 6]
// Output: ['Hello', 'There', 'ES']

// es6 using destructuring 
const array = ['hello', 'there', 'ES', 6];
const capitalize = array => {
    const filteredArr = array.filter(item => typeof item === 'string')
    const mappedArr = filteredArr.map(item => item[0].toUpperCase() + item.slice(1))
    return mappedArr;
}
console.log(capitalize(array));


// Dario
cons capitaliz = arr => {
    .filter(item => typeof item === 'string')
        .map(item => item[0].toUpperCase() + item.slice(1))
}

console.log(capitaliz(array));


// 2.  Write a function that calculates sale tax that should be paid for the product of the given price. 
// Use a constant to set a fixed value of the tax rate (i.e. 20% in Serbia). 
// 	Input: [{ name: “Banana”, price: 120 }, {name: “Orange”,  price: 100}]
// 	Output: [{ name: “Banana”, price: 144 }, { name: “Orange”,  price: 120 }] // product full price
// 	Output2: [ 24, 20 ] // tax only

const products = [{
    name: "Banana",
    price: 120.23
}, {
    name: "Orange",
    price: 100
}];

const productsWithTax = products.map(product => {

    const {
        price: prodPrice
    } = product;

    const newProd = {
        ...product,
        price: Number.parseFloat(prodPrice),
        priceWithTax: prodPrice * 1.2,
        tax: prodPrice * 0.2
    }

    return newProd
})

console.log(products);
console.log(productsWithTax);




// 3. Write a function that increases each element of the given array by the given value. 
//  If the value is omitted, increase each element of the array by 1.  
//	Input: [4, 6, 11, -9, 2.1], 2
//	Output: [6, 8, 13, -7, 4.1]


const plusTwo = () => {
    const array = [4, 6, 11, -9, 2.1];
    let num = 2;
    let newArray = array.map(number => number + 2);
    console.log(newArray);
}

plusTwo();





// 4. Write a function that filters all even elements of the array.
// Input: [6, 11, 9, 0, 3]
// Output: [6, 0]

const array = [6, 11, 9, 0, 3];

let filtArr = array.filter(element => {
    return (element % 2 === 0);
})

console.log(filtArr);





// 5. Write a function that filters all integer numbers from the given array. 
// Input: [1.6, 11.34, 9.23, 7, 3.11, 8]
// Output: [7, 8]

let arrInput = [1.6, 11.34, 9.23, 7, 3.11, 8];

let integerNumber = arrInput.filter(element => {
    return (Number.isInteger(element));
})

console.log(integerNumber);




// 6. Write a function that filters all integer arguments that contain digit 5.
//	Function arguments: 23, 11.5, 9, 'abc', 45, 28, 553 
//	Output: [45, 553]

let arrArg = [23, 11.5, 9, "abc", 45, 28, 553];
let newArrInte = [];

let findNumberFive = arrArg.filter(element => {
            let integerNum = (Number.isInteger(element));
            if (integerNum) {

            }


        }





// 7. Write a function that returns indexes of the elements greater than 10. 
//	Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
//	Output: 1, 2, 5

        const indexesGreater = (...arg) => {
            return arg
                .filter(element => element > 10)
                .map(element => arg.indexOf(element));
        }

        console.log(indexesGreater(1.6, 11.34, 29.23, 7, 3.11, 18));






// 8. 
// a. Create an array of persons. A person should be an object with name and age properties. Experiment with enhanced object literals. 
// b. Write a function that prints out the names of persons older than 25. 
// c. Write a function that check if there is a person older than 40.
// d. Write a function that checks if all persons are older than 20.  

        let persons = [{
            name: "James",
            age: 30
        }, {
            name: "Ana",
            age: 20
        }, {
            name: "Liam",
            age: 51
        }, {
            name: "Ema",
            age: 42
        }, {
            name: "Ava",
            age: 24
        }, {
            name: "Charlotte",
            age: 33
        }];

        const printOlderThan25 = array => {
            var result = [];
            array.forEach(element => {
                if (element.age > 25) {
                    result.push(element.name)
                }
            });
            return result;
        }
        console.log(printOlderThan25(persons));

        const printOlderThan40 = array => {
            var result = [];
            array.forEach(element => {
                if (element.age > 40) {
                    result.push(element.name)
                }
            });
            return result;
        }
        console.log(printOlderThan40(persons));

        const printOlderThan20 = array => {
            var result = [];
            array.forEach(element => {
                if (element.age > 20) {
                    result.push(element.name)
                }
            });
            return result;
        }
        console.log(printOlderThan20(persons));




// 9. Write a function that checks if the given array is an array of positive integer values. 
//	Input: [3, 11, 9, 5, 6]
//	Output: yes
//  Input: [3, -12, 4, 11]
//	Output: no

        let array = [3, 11, 9, 5, 6];

        const positiveIntValues = (arr) => {
            return arr.every(element => element >= 0);
        }

        positiveIntValues(array) ? console.log("Yes") : console.log("No");




// 10. Write a function that calculates the product of the elements of the array. 
// Input: [2, 8, 3]
// Output:  48

        let arr = [2, 8, 3];

        let productOfArrays = (arr) => {
            let first = arr[0];
            for (let i = 1; i < arr.length; i++) {
                first *= arr[i];
            }
            return first;
        }

        console.log(productOfArrays(arr));






// 11. Write a function that calculates the maximum of the given array. 
// Input: [2, 7, 3, 8, 5.4] 
// Output: 8

        let arr = [2, 7, 3, 8, 5.4];

        let maxNumber = arr => {
            return Math.max(...arr);
        }

        console.log(maxNumber(arr));