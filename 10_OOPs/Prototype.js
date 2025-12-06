// let myName = "Anjani     "
// let myChannel = "Chai        "

// console.log(myName.truelength());


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.anjani = function(){
    console.log(`anjani is present in all objects `);
}

Array.prototype.heyAnjani = function(){
    console.log(`Anjani says hello`);
}

// heroPower.anjani()

// myHeroes.anjani()
// myHeroes.heyAnjani()
// heroPower.heyAnjani()


//inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport 
}

Teacher.__proto__ = User

// Modern Syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode         "

String.prototype.trueLength = function(){
    console.log(`${this}`)
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea   ".trueLength()
