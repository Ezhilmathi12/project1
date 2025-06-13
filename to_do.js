// to do list
// calculator.js

const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  readline.question("Enter first number: ", (num1) => {
    readline.question("Enter operator (+ - * /): ", (operator) => {
      readline.question("Enter second number: ", (num2) => {
        let result;
        const a = parseFloat(num1);
        const b = parseFloat(num2);
  
        switch (operator) {
          case "+":
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "*":
            result = a * b;
            break;
          case "/":
            result = a / b;
            break;
          default:
            console.log("Invalid operator");
            readline.close();
            return;
        }
  
        console.log(`Result: ${result}`);
        readline.close();
      });
    });
  });
  
  


  