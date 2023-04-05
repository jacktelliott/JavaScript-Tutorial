//Constructor
function User(email, name) {
    this.email = email;
    this.name = name;
    this.online = false;
    //this function is attatched to the constructor, not in the proto property
    this.login = function() {
        console.log(this.email, 'has logged in');
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');

console.log(userOne);
userTwo.login();
