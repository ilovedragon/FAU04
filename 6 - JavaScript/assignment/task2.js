// Print Numbers in a Range

//Get the user input for the starting and ending numbers for the range
let startNum = prompt('Enter the starting number.');
console.log("Your starting number is:",startNum);

let endNum = prompt('Enter the ending number.');
console.log("Your ending number is:",endNum);

// Check if the user's input is a valid range
if (endNum <= startNum) {    
    console.log("You have entered an invalid range, please try again !!!");
} else {
// Explain what the program will do :
console.log("Printing each number from starting numnber", startNum, "to ending number", endNum);
// Print each number from starting number to ending number
for (let i = startNum; i <= endNum; i++) {
    console.log(i);
    }

}