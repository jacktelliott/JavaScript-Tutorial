//function declaration
function greet() {
    console.log('hello there');
}

//function expression
const speak = function() {
    console.log('good day!')
};

greet();
speak();
//hello will be called because it is visible to the compiler
hello();
//error will not be called because it is not visible to the compiler
// error();

function hello() {
    console.log('hello was called');
}

const error = function() {
    console.log('error was called');
};

const speakTo = function(name = 'luigi', time = 'night') {
    console.log(`good ${time} ${name}`)
};
speakTo("mario", "morning");
speakTo();
speakTo('shaun');

const calcArea = function(radius) {
    //** is an exponent
    return 3.14 * radius ** 2;
}

const area = calcArea(5);
console.log(area);

const calcVol = function(area, depth) {
    return area * depth;
};

calcVol(area, 5);