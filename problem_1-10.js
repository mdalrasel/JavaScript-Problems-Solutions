/* 
   Problem 1: Find the Sum of Two Numbers
   Question: Write a function sum(a, b) that takes two numbers as input and returns their sum.
 */

function sum(a, b) {
    const total = a + b;
    return total
}
console.log(sum(5, 10)); //Output:15



/* 
   Problem 2: Check if a Number is Even or Odd
   Question: Write a function isEven(number) that checks whether a number is even or odd and returns "Even" or "Odd".
*/

function isEven(number) {
    if (number % 2 === 0) {
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

function findMax(arr) {
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

/*
    Problem 5: Reverse a String
    Question: Write a function reverseString(str) that takes a string as input and returns the string reversed.
*/

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("hello"));    // Output: olleh
console.log(reverseString("JavaScript")); // Output: tpircSavaJ


/*
    Problem 6: Check if a String is a Palindrome
    Question: Write a function isPalindrome(str) that checks if a given string is a palindrome (reads the same forwards and backwards, ignoring case and non-alphanumeric characters).
*/

function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}
console.log(isPalindrome("madam"));      // Output: true
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("hello"));      // Output: false


/*
    Problem 7: Count Vowels in a String
    Question: Write a function countVowels(str) that takes a string as input and returns the number of vowels (a, e, i, o, u, case-insensitive) in it.
*/

function countVowels(str) {
    let count = 0;
    const lowerStr = str.toLowerCase();
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < lowerStr.length; i++) {
        if (vowels.includes(lowerStr[i])) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World")); // Output: 3 (e, o, o)
console.log(countVowels("JavaScript"));  // Output: 3 (a, a, i)
console.log(countVowels("Rhythm"));      // Output: 0


/*
    Problem 8: Remove Duplicates from an Array
    Question: Write a function removeDuplicates(arr) that takes an array and returns a new array with all duplicate elements removed.
*/

function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
console.log(removeDuplicates(['apple', 'banana', 'apple', 'orange'])); // Output: ['apple', 'banana', 'orange']


/*
    Problem 9: Find the Longest Word in a String
    Question: Write a function findLongestWord(str) that takes a string of words and returns the longest word in that string. If there are multiple words with the same longest length, return the first one encountered.
*/

function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (let i = 0; i < words.length; i++) {
        const cleanWord = words[i].replace(/[^a-zA-Z0-9]/g, '');
        if (cleanWord.length > longestWord.length) {
            longestWord = cleanWord;
        }
    }
    return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // Output: "jumped"
console.log(findLongestWord("I love JavaScript programming")); // Output: "programming"


/*
    Problem 10: Check if Two Strings are Anagrams
    Question: Write a function areAnagrams(str1, str2) that takes two strings as input and returns true if they are anagrams of each other, and false otherwise. (Anagrams are words or phrases formed by rearranging the letters of another, such as "listen" and "silent").
*/

function areAnagrams(str1, str2) {
    const cleanAndSort = (str) => {
        return str.toLowerCase() 
                  .replace(/[^a-z0-9]/g, '') 
                  .split('') 
                  .sort() 
                  .join(''); 
    };

    const cleanedStr1 = cleanAndSort(str1);
    const cleanedStr2 = cleanAndSort(str2);
    return cleanedStr1 === cleanedStr2;
}
console.log(areAnagrams("listen", "silent"));     // Output: true
console.log(areAnagrams("Debit card", "Bad credit")); // Output: true
console.log(areAnagrams("hello", "world"));       // Output: false
