/*
Coding challenge #1: Print numbers from 1 to 10
*/
for (let i = 1; i <= 10; i++) {
    // console.log(i);
}


/*
Coding challenge #2: Print the odd numbers less than 100
*/
for (let i = 1; i < 100; i = i + 2) {
    // console.log(i);
}

/*
Coding challenge #3: Print the multiplication table with 7
*/

for (let i = 1; i <= 10; i++) {
    let tableNumber7 = 7;
    // console.log(tableNumber7 + "*" + i + "=" + tableNumber7 * i);
}

/*
Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10
*/

function tables(tableNumber) {
    for (let i = 1; i <= 10; i++) {
        console.log(tableNumber + "*" + i + "=" + tableNumber * i);
    }
}

/*
let allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (number of allNumbers) {
    // console.log(number);
    tables(number)
}
*/

for (let i = 1; i <= 10; i++) {
    // tables(i);
}



/*
Coding challenge #5: Calculate the sum of numbers from 1 to 10
*/
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
}
// console.log(sum);


/*
Coding challenge #6: Calculate 10!
*/
let mult = 1;
for (let i = 1; i <= 10; i++) {
    // console.log(i);
    mult = mult * i;
}
// console.log(mult);


/*
Coding challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
*/

let sumTenToThirty = 0;
for (let i = 11; i <= 30; i = i + 2) {
    sumTenToThirty = sumTenToThirty + i;
    // console.log(sumTenToThirty);
}

/*
Coding challenge #8: Create a function that will convert from Celsius to Fahrenheit
*/

function celsiusToFahrenheit(celsius) {
    farhenheit = (celsius * 9 / 5) + 32;
    // console.log(farhenheit);
}
celsiusToFahrenheit(0);


/*
Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius
*/

function fahrenheitToCelsius(fahrenheit2) {
    celsius2 = (fahrenheit2 - 32) * 5 / 9
    console.log(celsius2);
}


/*
Coding challenge #10: Calculate the sum of numbers in an array of numbers
*/
let sum3 = 0
let arr = [10, 22, 3, 4, 5, 6, 7, 8, 9];
for (num of arr) {
    sum3 = sum3 + num;
    console.log(sum3);
}