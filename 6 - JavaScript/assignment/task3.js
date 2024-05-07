// Calculate the result of a base to a specified exponent

function exponentCal() {
    let num1 = prompt("Please enter the base number");
    let num2 = prompt("Please enter the exponent number");
    return num1**num2;    
}

// Calling functions with parameter
console.log("The result is:", exponentCal());
