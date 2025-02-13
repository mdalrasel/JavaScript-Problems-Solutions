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