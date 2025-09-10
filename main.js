let displayValues = [0, '+', 60, '.', 9]; // (Number | String)[]
//let currentInput = ''; // Number | String
let result = 0; // Number
let resultOnDisplay = false; // Boolean

//import { sum, sub, mult, div, perc } from './calculator.js';


function inputValue(value) { // (Number | String)
    let typeOfValue = typeof(value);
    if (typeOfValue === "number") {
            handleNumericInput(value);
    } else if (typeOfValue == "string") {
            handleOperationInput(value);
    }
}

function handleNumericInput(value) { // (Number)
    let lastInput = displayValues.at(-1); // Number | String
    if (typeof(lastInput) === "number") {
        combineNumbers(lastInput, value);
        
    } else if (typeof(lastInput) === "string") {
        displayValues.push(value);    
    };
}

function combineNumbers(last, curr) { // (Numner)
    displayValues.pop();
    if (last === 0) {
        displayValues.push(curr);
    } else {
        displayValues.push(Number(last + '' + curr));
    }
}

function handleOperationInput(value) { // (String)
    let lastInput = displayValues.at(-1); // String
    if (typeof(lastInput) === "number") {
        displayValues.push(value);    
    } else if (typeof(lastInput) === "string") {
        checkDecimal(lastInput, value);
    }
}

function checkDecimal(last, curr) { // (Number | String)
    if (last !== '.' && curr !== '.'){
        displayValues.pop();
        displayValues.push(curr);
        return;
    } else if (last !== '.' && curr === '.') {
        return;
    } else if (last === '.') {
        displayValues.pop();
        displayValues.push(curr);
        return;
    }
}

function clear() {
    displayValues = [0];
    result = 0;
    resultOnDisplay = false;
}

function eraseInput() {
    let lastInput = displayValues.at(-1);
    let lastInputSize = lastInput.toString().length;
    let newValue = lastInput.toString().slice(0, -1);
    let prevLength = displayValues.length;
    displayValues.pop();
    if (typeof(lastInput) === "number") {
        if (prevLength === 1 && lastInputSize === 1) {
            displayValues.push(0);
            return;
        } else if (prevLength > 1 && lastInputSize === 1) {
            return;
        } else if (lastInputSize > 1) {
            displayValues.push(Number(newValue));
            return;
        }
    } else return;
} 


console.log(displayValues);
inputValue('.');

console.log('Final display values ');
console.log(displayValues);
