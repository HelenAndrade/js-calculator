let displayValues = [0, '+', 60, '-']; // (Number | String)[]
//let currentInput = ''; // Number | String
let result = 0; // Number
let resultOnDisplay = false; // Boolean

//import { sum, sub, mult, div, perc } from './calculator.js';


function inputValue(value) { // (Number | String)
    let typeOfValue = typeof(value);
    console.log('Display values '+ displayValues);
    if (typeOfValue === "number") {
            handleNumericInput(value);
    } else if (typeOfValue == "string") {
            handleOperationInput(value);
    }
}

function handleNumericInput(value) { // (Number)
    let lastInput = displayValues.at(-1); // Number | String
    if (typeof(lastInput) === "number") {
        console.log('Tem valores no display e o anterior é um número');
        combineNumbers(lastInput, value);
        
    } else if (typeof(lastInput) === "string") {
        console.log('Tem valores no display e o anterior é uma operação');
        displayValues.push(value);    
        console.log(lastInput);
    };
}

function combineNumbers(last, curr) { // (Numner)
    displayValues.pop();
    if (last === 0) {
        //console.log('O ultimo numero é um 0');
        displayValues.push(curr);
    } else {
        //console.log('O ultimo numero NÃO é um 0');
        displayValues.push(Number(last + '' + curr));
    }
    // Garantir regras como: não aceitar mais de um . se já existir !!!?
}

function handleOperationInput(value) { // (String)
    let lastInput = displayValues.at(-1); // String
    if (typeof(lastInput) === "number") {
        //console.log('Tem valores no display e o anterior é um número');
        displayValues.push(value);    
    } else if (typeof(lastInput) === "string") {
        //console.log('Tem valores no display e o anterior é uma operação');
        displayValues.pop();
        displayValues.push(value);
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

/*
console.log(displayValues);
inputValue(Number('7' + '.5'));
//eraseInput();


console.log('Final display values ');
console.log(displayValues);
*/