//object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: ['Why mac & cheese rules', '10 things to make with marmite']
};

console.log(user);
console.log(user.name);

user.age = 35;
console.log(user.age);

//this works as an alternative to the above notation
console.log(user['name']);
user['name'] = 'chun-li';
console.log(user['name']);

const key = 'location';
console.log(user[key]);

console.log(typeof user);