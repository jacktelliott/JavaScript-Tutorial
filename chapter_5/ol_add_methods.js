//object literals

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: ['Why mac & cheese rules', '10 things to make with marmite'],
    login: function() {
        console.log('the user logged in');
    },
    //this works the same as the above function
    logout() {
        console.log('the user logged out');
    },
    logBlogs() {
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    },
    //this will return the wrong 'this' object because it uses and arrow function.
    example: () => {
        console.log(this);
    }
};

user.login();
user.logout();
user.logBlogs();
user.example()
