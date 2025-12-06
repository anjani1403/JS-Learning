//OBJECT LITERAL

const user = {
    username: "Anjani Manthapurwar",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this)

// COSTRUCTOR FUNCTION

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this
}

const userOne = new User("Anjani", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)

console.log(userOne.constructor);
// console.log(userTwo);

// "new keyword" - Whenever we use new keyword, 
// Step:01 - an empty object is created which is called as "instance"
// Step:02 - a constructor function is called, because of new keyword
// Step:03 - all the arguments are injected under this keyword
// Step:04 - we get it inside the function