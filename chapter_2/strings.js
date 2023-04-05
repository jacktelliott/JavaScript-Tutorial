//template strings
const title = 'Best reads of 2023';
const author = 'Mario';
const likes = 30;

//concatenation way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.';

//template string way
//**note the backticks are used instead of single or double quotes**
let result2 = `The blog called ${title} by ${author} has ${likes} likes.`;

console.log(result, result2)

//creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author} </p>
    <span>This blog has ${likes} likes</span>
`;