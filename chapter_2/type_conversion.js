//score is a string
let score = '100';
console.log(score + 1);
console.log(typeof score);

//score is converted to a number
score = Number(score);
console.log(score + 1);
console.log(typeof score);

//NaN is "not a number"
let result = Number('hello');
console.log(result);

let result1 = Boolean(100);
console.log(result1, typeof result1);

//positive and negative numbers are true
//zero is false

//for strings an empty string is false, all others are true