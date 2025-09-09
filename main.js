let displayValues = [0]; // (Number | String)[]
//let currentInput = ''; // Number | String
let result = 0; // Number
let resultOnDisplay = false; // Boolean

//import { sum, sub, mult, div, perc } from './calculator.js';


function inputValue(value) { // (Number | String)
    let typeOfValue = typeof(value);
    console.log('Display values '+ displayValues);
    if (typeOfValue == "number") {
            handleNumericInput(value);
    } else if (typeOfValue == "string") {
            handleOperationInput(value);
    }
}

function handleNumericInput(value) { // (Number)
    let lastInput = displayValues.at(-1), typeOfLastInput = typeof(lastInput); // Number | String
    if (typeOfLastInput == "number") {
        console.log('Tem valores no display e o anterior é um número');
        combineNumbers(lastInput, value);
        
    } else if (typeof(lastInput) == "string") {
        console.log('Tem valores no display e o anterior é uma operação');
        displayValues.push(value);    
        console.log(lastInput);
    };
}

function combineNumbers(last, curr) { // (Numner)
    let lastInput = displayValues.at(-1); // Number
    displayValues.pop();
    if (last == 0) {
        console.log('O ultimo numero é um 0');
        displayValues.push(curr);
        console.log(last);
    } else {
        console.log('O ultimo numero NÃO é um 0');
        displayValues.push(Number(lastInput + '' + curr));
        console.log(lastInput);
    }
    // Garantir regras como: não deixar 0005, não aceitar mais de um . se já existir !!!?
}

function handleOperationInput(value) { // (String)
    let lastInput = displayValues.at(-1); // String
    if (typeof(lastInput) === "number") {
        console.log('Tem valores no display e o anterior é um número');
        displayValues.push(value);    
        console.log(lastInput);
    } else if (typeof(lastInput) === "string") {
        console.log('Tem valores no display e o anterior é uma operação');
        displayValues.pop();
        displayValues.push(value);
        console.log(lastInput);
    }
}

inputValue(5);
console.log('Final display values '+ displayValues);