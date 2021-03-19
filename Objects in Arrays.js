// object literals

const blogs = [
    { title: "Why mac & cheese rules", likes: 30 },
    { title: "10 things to make with marmite", likes: 35 }
];

let user = {
    name: "RAGNAGUS",
    age: 30,
    email: "casnova152@gmail.com",
    location: "Thailand",
    blogs: [
        { title: "Why mac & cheese rules", likes: 30 },
        { title: "10 things to make with marmite", likes: 35 }
    ],
    login() { console.log("The user logged in") },
    logout() { console.log("The user logged out") },
    logBlogs() { this.blogs.forEach(blog => { console.log(blog.title, blog.likes + " likes"); }) }
};


user.logBlogs();
