//variable and block scope
let age = 30;

if (true) {
    //creates new age variable
    let age = 40;
    console.log('inside 1st code block: ', age);
}
//cannot work becaus age is already defined in this scope
// let age = 40

console.log('outside code block: ', age);