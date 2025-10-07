
function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("N");
    console.log("I");
}

// sayMyName // This is reference of a function
// sayMyName() // This is execution of a function

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(2, 6)

// console.log("Result : ",result);

function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged im`
}

// console.log(loginUserMessage("anjani"))
// console.log(loginUserMessage("anjani"))

function calculateCartPrice(val1, val2, ...num1){  // this ... is rest operator
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username : "anjani",
    prices : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// handleObject(user)
handleObject({
    username : "sam",
    prices : 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[2]
}

console.log(returnSecondValue([200, 400, 100, 600]));