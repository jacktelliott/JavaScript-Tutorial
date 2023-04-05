const person = 'shaun';

//functions

const greet = () => 'hello';
let resultOne = greet();
console.log(resultOne);

//methods

let resultTwo = person.toUpperCase();
console.log(resultTwo);

//function as parameter
const myFunc = callbackFunc => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    //do something
    console.log(value);
});

let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`)
}

people.forEach((person, index) => {
    console.log(index, person);
});

people.forEach(logPerson);
