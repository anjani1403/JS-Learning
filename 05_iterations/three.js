// for of loop / enhanced for loop

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World!"
// for (const greet of greetings) {
//     if(greet == " ") continue;
//     console.log(`Each char is ${greet}`);
// }

//Maps

// const map = new Map()

// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('UK', "United Kingdom")
// map.set('IN', "India")

// console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

for (const [key, value] of myObject) {  //this loop is not working for objects
    console.log(key, ':-', value);
}