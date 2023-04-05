//object literals

const blogs = [
    { title: 'Why mac & cheese rules', likes: 30 },
    { title: '10 things to make with marmite', likes: 50 }
];

console.log(blogs);

let user = {
    name: 'crystal',
    age: 30,
    email: 'crystal@thenetninja.co.uk',
    location: 'Berlin',
    blogs: [
        { title: 'Why mac & cheese rules', likes: 30 },
        { title: '10 things to make with marmite', likes: 50 }
    ],
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
            console.log(blog.title, blog.likes);
        });
    }
};

user.logBlogs();