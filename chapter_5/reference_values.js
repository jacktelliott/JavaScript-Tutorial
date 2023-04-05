//primitive values

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

//reference values

let userOne = {name: 'ryu', age: 30};
let userTwo = userOne;
console.log(userOne, userTwo);

//changes the age value for both
//userOne and userTwo are both pointing to the same object
//separate pointers, same object
userOne.age = 35;
console.log(userOne, userTwo);