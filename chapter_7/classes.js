//this creates an object, but we want to create a class as a template
//for new objects to be created.
var user = {
    email: "ryu@ninjas.com",
    name: "Ryu",
    login() {
        console.log(this.email, "has logged in");
    },
    logout() {
        console.log(this.email, "has logged out");
    }
}

//JavaScript doesn't technically have classes built in.
//Under the hood, classes do the same thing as a prototypes.
//JavaScript has been adapted, so that it can appear to use classes.
//This makes it easier to understand, but the language is doing some
//extra work under the hood to make classes seem to work.
//We will focus on classes first, then look under the hood at
//how everything works with prototypes.

class User {

    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'just logged out');
        return this;
    }
    updateScore() {
        this.score++;
        console.log(this.email, 'score is now', this.score);
        return this;
    }
}

var userOne = new User('ryu@ninjas.com', 'Ryu');
var userTwo = new User('yoshi@mariokorp.com', 'Yoshi');
console.log(userTwo);
// userTwo.login();
// userTwo.logout();

//method chaining
userTwo.login().updateScore().updateScore().logout();

class Admin extends User {
    deleteUser(user) {
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var admin = new Admin('jacktelliott@gmail.com', 'Jack');
var users = [userOne, userTwo, admin];
console.log(users);
admin.deleteUser(userTwo);
console.log(users);