// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name : "Anjani",
    "full name" : "Anjani Manthapurwar",
    [mySym] : "myKey1",
    age : 22,
    location : "Bhilai",
    email : "anjani@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);
// console.log(typeof mySym);

JsUser.email = "anjani.facebook.com"
// Object.freeze(JsUser)
JsUser.email = "anjani.apple.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());