const name = "anjani"
const repoCount = 5

//console.log(name + repoCount + " Value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('anjani-am-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
//console.log(newString);

const anotherString = gameName.slice(-8, 4)
//console.log(anotherString);

const newStringOne = "      anjani       "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://anjani.com/anjani%14manthapurwar"

console.log(url.replace('%', '-'));

console.log(url.includes('anjani'));

console.log(gameName.split('a'));