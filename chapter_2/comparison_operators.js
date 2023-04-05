let age = 25;

//==, +=, -=, >=, >, <, <=, all function as normal

//however 25 == '25'
//should produce true
let bool = age == 25;
//should produce true
let bool1 = age == '25';

console.log(bool, bool1);

//strict comparison (different types cannot be equal)

//should produce true
let bool2 = age === 25;
//should produce false
let bool3 = age === '25';

console.log(bool2, bool3);

//should produce true
let bool4 = age !== '25';
console.log(bool4)