//get an element by ID
const title = document.getElementById("page-title");
console.log(title);

//get elements by their class name
const errors = document.getElementsByClassName('error');
//errors is an Html collection
console.log(errors);
console.log(errors[0]);
//cannot use foreach on an Html collection

//get elements by their tag name
const paras = document.getElementsByTagName('p');
//paras is an Html collection
console.log(paras);

//Because the getElementsBy... fuctions return an Html collection,
//we need to convert to an array in order to do a foreach loop and other
//array functions. This is why query selectors can be very useful.

//However, getElementById still seems useful in most cases
//for a singular object