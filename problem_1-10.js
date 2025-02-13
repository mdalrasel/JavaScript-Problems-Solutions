/* 
   Problem 1: Find the Sum of Two Numbers
   Question: Write a function sum(a, b) that takes two numbers as input and returns their sum.
 */

function sum(a, b) {
    const total = a + b ;
    return total
}
console.log(sum(5,10))  ; //Output:15



/* 
   Problem 2: Check if a Number is Even or Odd
   Question: Write a function isEven(number) that checks whether a number is even or odd and returns "Even" or "Odd".
*/

function isEven(number){
    if(number % 2 === 0){
        return 'Even'
    }
    return 'Odd'
}
console.log(isEven(4));  //Output: "Even"
console.log(isEven(7));  //Output: "Odd"



/*
   Problem 3: Find the Maximum Number in an Array
   Question: Write a function findMax(arr) that takes an array of numbers and returns the largest number.
*/

function findMax(arr){
    return Math.max(...arr)
    
}
console.log(findMax([10, 20, 5, 38, 8]))  //Output: 38



/*
   Problem 4: Calculate Factorial of a Number
   Question: Write a function factorial(n) that takes a number n and returns its factorial (n!).
*/

function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));   // Output: 120