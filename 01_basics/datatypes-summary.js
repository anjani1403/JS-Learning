//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =  null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 541231425789512751439314n



//  Reference (Non primitive)

//  Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "anjani",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
}

console.log(typeof anotherId);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "anjanidotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "anjani@google.com"

userOne.upi = "anjani@ybl"

console.log(userOne.upi);
console.log(userTwo.upi);
console.log(userOne.email);
console.log(userTwo.email);