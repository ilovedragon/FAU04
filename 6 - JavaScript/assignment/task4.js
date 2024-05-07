// Print numbers from 1 to 100, assign "Fizz", "Buzz" or "FizzBuzz" to the number

//Assign 1 to 100 to an array, and check the number
console.log("This program will print numbers from 1 to 100.");
console.log("For multiples of 3, print 'Fizz' instead of the number.");
console.log("For multiples of 5, print 'Buzz' instead of the number.");
console.log("For numbers that are multiples of both 3 and 5, print 'FizzBuzz'.");
console.log("Program Start:");

let numRange = [];
for (let i = 1; i <= 100; i++) {
    numRange[i] = i;    
    // if - else if - else statement
    if ((numRange[i]  % 3 == 0) && (numRange[i]  % 5 == 0)){
        console.log("FizzBuzz");
    } else if ((numRange[i]  % 3 == 0) && (numRange[i]  % 5 != 0)) {
        console.log("Fizz");
    } else if ((numRange[i]  % 3 != 0) && (numRange[i]  % 5 == 0)) {
        console.log("Buzz");
    } else {
        console.log(numRange[i] );
    }
}


    
