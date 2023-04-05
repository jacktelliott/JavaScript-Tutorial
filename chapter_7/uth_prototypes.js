//Constructor
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
}
//adds a method to user
User.prototype.login = function() {
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function() {
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args){
    //This gives an Admin the same attributes (fields) as User
    User.apply(this, args);
    this.role = 'Super Admin';
}
//This gives Admin the same prototype (methods) as User
Admin.prototype = Object.create(User.prototype);

Admin.prototype.deleteUser = function(user) {
    users = users.filter(u => {
        return u.email != user.email;
    });
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
var admin = new Admin('jacktelliott@gmail.com', 'Jack');

var users = [userOne, userTwo, admin];

console.log(admin);
console.log(userOne);
admin.login();