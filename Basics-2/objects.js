// singleton
// Object.create  // through constructor

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Nishit",
    "Full Name": "Nishit Kakkad",
    [mySym]: "myKey1",
    age: 20,
    location: "Vadodara",
    email: "nisitkakkad@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
    
}

// console.log(jsUser.email);
// console.log(jsUser["Full Name"]);
// console.log(jsUser[mySym])

jsUser.email = "nisit@google.com"
// Object.freeze(jsUser)
jsUser.email = "nisit@anthropic.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

