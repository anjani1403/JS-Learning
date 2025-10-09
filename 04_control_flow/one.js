// if statement
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature === 41) {
//     console.log("less that 50");
// }else{
//     console.log("temp is greater than 50");
// }
// console.log("executed");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");
// }else if (balance < 750) {
//     console.log("less than 750");
// } else if(balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true

if(isUserLoggedIn && debitCard && 2==2){
    console.log("Allowed to buy courses");
}

if (loggedInFromEmail || loggedInFromGoogle || guestUser) {
    console.log("user logged in");
}