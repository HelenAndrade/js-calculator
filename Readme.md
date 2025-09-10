# Calculator App
===============

This is a cross-platform desktop application that performs basic arithmetic operations such as addition, subtraction, multiplication, and division. It can handle multiple operations in a single expression, respecting the order of operations (PEMDAS/BODMAS). For each change in input, the display is updated to reflect the current expression and result. By default, the calculator starts with a display value of 0. Users can input numbers and operations through button clicks, and the display updates accordingly. Through a "Clear" button, users can reset the calculator to its initial state.

Possibly, the calculator can also handle decimal numbers, negative numbers, parentheses, save history and other advanced features in future iterations.


## Technologies Used
-----------------

- HTML
- CSS
- JavaScript
- Electron


## Features
--------

- Display current expression and result
- Button inputs for digits and operations
- Clear functionality
- Basic arithmetic operations
- Cross-platform compatibility


## Global variables
-----------------

displayValues[] ( String | Number ): The current values of numbers and operations.
currentInput ( String | Number ): The current input value.
result ( Number ): The result of the current calculation.
resultOnDisplay ( Boolean ): Indicates if the result is currently displayed.


## Functions
---------   

✔inputValue(value: String | Number): Handles input values (numbers and operations) and updates the display accordingly.
✔handleNumericInput(value: Number): Processes numeric inputs and updates displayValues[].
✔handleOperationInput(value: String): Processes operation inputs and updates displayValues[].
✔combineNumbers(last: Number, curr: Number): Combines the last number in displayValues[] with the current numeric input.
✔clear(): Clears the display and resets the calculator state.
eraseInput(): Removes the last input from the display.
calculate(values: (String | Number)[]): Performs the calculation based on the current values in displayValues[] and returns the result.
updateDisplay(): Updates the display with the current values in displayValues[].

