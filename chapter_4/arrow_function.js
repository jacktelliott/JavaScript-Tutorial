//regular function
const calcArea = function(radius) {
    //** is an exponent
    return 3.14 * radius ** 2;
}

//arrow function
//does the same thing as calcArea
const calcArea1 = (radius) => {
    return 3.14 * radius ** 2;
};

//works for one parametre and one line function.
const calcArea2 = radius => 3.14 * radius ** 2;

const area = calcArea(5);
console.log('area is: ', area);


//Practice functions to arrow functions

const greet = () => "hello, world";

const bill = (products, tax) => {
    let total = 0;
    products.forEach(product => {
        total += product + product * tax;
    });
    return total
}

console.log(bill([10,15,30], 0.2));