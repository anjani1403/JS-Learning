// objects singleton or declaring object using constructor
// const tinderUser = new Object() -> it is a singleton object

const tinderUser = {} // -> it is a non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "anjani",
            lastname : "manthapurwar"
        }
    }
}
// console.log(regularUser.fullname?.userfullname.lastname);
// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);

const users = [
    {
        id : 1,
        email : "anjani@gmail.com"
    },
    {
        id : 1,
        email : "anjani@gmail.com"
    },
    {
        id : 1,
        email : "anjani@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// De-structure of objects

const course = {
    coursename: "JS in hindi",
    price: "999",
    courseInstructor: "anjani"
}

// console.log(course[courseInstructor]);

const {courseInstructor : instructor} = course //this is object destructure

console.log(instructor);

// const navbar = ({company}) => {   // syntax of curly braces - de-structuring

// }

// navbar(company = "anjani")


// Concept of JSON-API Introduction
// {
//     "name" : "hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]

