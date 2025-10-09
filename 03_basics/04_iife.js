// Immediately Invoked Function Expressions (IIFE)

//this is named IIFE
(function chai() {
    console.log(`DB CONNECTED`);
})();

//this is un-named IIFE using arrow
(() => {
    console.log(`DB CONNECTED TWO`);
})();

//this is IIFE with parameters
((name) => {
    console.log(`DB CONNECTED THREE ${name}`);
})('anjani')