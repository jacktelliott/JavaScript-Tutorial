alert('Hello, World!');
console.log(1);
let age = 25;
let year = 2023;

//outputting variables to the console.
//press <f12> on google chrome to view.
console.log(age, year);

//reassigning age variable
age = 30;
console.log(age);

//creates a constant
const points = 100;

//older way to create variables
//new way is using either let or const
var score = 75;
console.log(score);
var email = "jacktelliott@gmail.com";
var isTrue = true;
var nullExample = null;

let otherEmail = "moneyman1721@yahoo.com";
score = "overriding to a String";

console.log(score);

//older browsers do not support let and const

//strings
console.log('hello, world');

//string concatenation
let firstName = 'Jack';
let lastName = "Elliott";
let fullName = firstName + ' ' + lastName;

console.log(fullName);

//getting characters
console.log(fullName[0]);

//string length
console.log(fullName.length);

//string methods

//function is a snippet of code that performs a specific task
//method is a function that is associated with a particular object
//function and method are mostly interchangable

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);

//slice(beginningOfSubString, EndOfSubString)
let result2 = email.slice(0, 12)
console.log(result2);

//substr(beginningOfSubString, lengthOfSubstring)
let result3 = email.substr(4, 10);
console.log(result3);