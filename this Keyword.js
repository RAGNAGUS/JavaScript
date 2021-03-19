// object literals

let user = {
    name: 'RAGNAGUS',
    age: 30,
    email: 'casnova152@gmail.com',
    location: 'Thailand',
    blogs: ['Why mac & cheese rules', '10 things to make with marmite'],
    login() { console.log('The user logged in') },
    logout() { console.log('The user logged out') },
    logBlogs() { this.blogs.forEach(blog => { console.log(blog); }) }
};

user.login();
user.logout();
user.logBlogs();
console.log(this);
