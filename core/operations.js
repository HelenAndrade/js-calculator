/* "...args" (rest parameters)
 The rest parameter syntax allows a function to accept an indefinite number of 
 arguments as an array. Using reduce to calculate all arguments, starting with
 the initial value x, and going through all values in args array one by one.
*/

// FUNCTION SUM
function sum(x, ...args) {
    return args.reduce((acc, curr) => acc + curr, x);
};

// FUNCTION SUBTRACT
function sub(x, ...args) {
    return args.reduce((acc, curr) => acc - curr, x);
};

// FUNCTION MULTIPLY
function mult(x, ...args) {
    return args.reduce((acc, curr) => acc * curr, x);
};

// FUNCTION DIVIDE
function div(x, ...args) {
    return args.reduce((acc, curr) => acc / curr, x);
}

// FUNCTION PERCENTAGE
function perc(x, ...args) {
    return args.reduce((acc, curr) => (acc / 100) * curr, x);
}


console.log(perc(100, 10, 20, 30)); // 0.6
console.log(sum(1, 2, 3, 4)); // 10
console.log(sub(10, 2, 3));   // 5
console.log(mult(2, 2));   // 4
console.log(div(10, 2));   // 5