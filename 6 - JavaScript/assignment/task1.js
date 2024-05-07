// Grade Calculator

// Prompt user for input
let grade = prompt('Enter your grade.');
console.log("You have enter score:",grade);

// Start to determine the corresponding grade
if (grade >= 90) {
    console.log("Congratulations!!! You got grade 'A'.");
} else if (grade >= 80 && grade < 90) {
    console.log("Well done !!! You got grade 'B'.");
} else if (grade >= 70 && grade < 80) {
    console.log("Good job !!! You got grade 'C'.");
} else if (grade >= 60 && grade < 70) {
    console.log("Keep it up !!! You got grade 'D'.");
} else {
    console.log("I am sorry. You got grade 'F'");
}
