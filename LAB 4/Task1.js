// Function to find the square of a given number
function square(number) {
    return number * number;
}

// Function to find sum of cubes of two numbers
function sumOfCubes(num1, num2) {
    return Math.pow(num1, 3) + Math.pow(num2, 3);
}

// Function to reverse a number
function reverseNumber(number) {
    let reversed = parseInt(number.toString().split('').reverse().join(''));
    return reversed;
}

// Function to print all numbers between 1 and 100 which are divisible by given number z
function printDivisibleNumbers(z) {
    for (let i = 1; i <= 100; i++) {
        if (i % z === 0) {
            console.log(i);
        }
    }
}

// Example usage:
console.log("Square of 5:", square(5));
console.log("Sum of cubes of 2 and 3:", sumOfCubes(2, 3));
console.log("Reverse of 12345:", reverseNumber(12345));
console.log("Numbers divisible by 5 between 1 and 100:");
printDivisibleNumbers(5);
