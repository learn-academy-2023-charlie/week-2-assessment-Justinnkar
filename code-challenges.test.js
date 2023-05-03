// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.

describe("exampleFunction", () => {
    it("takes in an array of numbers and returns an array with all the numbers multiplied by 3", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]   
        expect(exampleFunction(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(exampleFunction(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})

// FAIL  ./code-challenges.test.js
// exampleFunction
//   ✕ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

// ● exampleFunction › takes in an array of numbers and returns an array with all the numbers multiplied by 3

//   ReferenceError: exampleFunction is not defined

// b) Create the function that makes the test pass.

// const exampleFunction = (arr) => {
//     return arr.map((num) => {
//         return num * 3
//     })
// }

// PASS  ./code-challenges.test.js
// exampleFunction
//   ✓ takes in an array of numbers and returns an array with all the numbers multiplied by 3 (1 ms)

const exampleFunction = (arr) => {
    return arr.map(num => num * 3)
}

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
// input: object as an argument 
// output: Even if numbers are even, or Odd if numbers are odd
// pass object as an argument into the function
// take value of number key 
// return if the number is odd or even using an if else statement

// a) Create a test with expect statements for each of the variables provided.

describe("oddOrEven", () => {
    it("takes an object as an argument and decides if the number inside it is evenly divisible by three or not.", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(oddOrEven(object1)).toEqual("Divisible by three")
        expect(oddOrEven(object2)).toEqual("Divisible by three")
        expect(oddOrEven(object3)).toEqual("Not divisible by three")
    })
})
// FAIL  ./code-challenges.test.js
//   exampleFunction
    // ✕ takes a object as an argument and decides if the number inside it is evenly divisible by three or not. (1 ms)

    // ● oddOrEven › takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

    // ReferenceError: oddOrEven is not defined

// b) Create the function that makes the test pass.

const oddOrEven = (object) => {
    const num = object.number;
    if (num % 3 === 0) {
        return "Divisible by three";
    } else {
        return "Not divisible by three";
    }
}

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
// input: Array of words
// output: array of words with all letters capitalized 
// function name: toCaps
// use array of words as an argument for function toCaps
// using a .map to itereate through each array and index
// return an array with all words capitalized using .toUpperCase

// a) Create a test with expect statements for each of the variables provided.
describe("toCaps", () => {
    it("function that takes in an array of words and returns an array with all the words capitalized.", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(toCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(toCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// FAIL  ./code-challenges.test.js
//   toCaps
//     ✕ function that takes in an array of words and returns an array with all the words capitalized. (3 ms)

//   ● toCaps › function that takes in an array of words and returns an array with all the words capitalized.

//     ReferenceError: toCaps is not defined

// b) Create the function that makes the test pass.

const toCaps = (array) => {
    return array.map(string => string.charAt(0).toUpperCase() + string.slice(1));
  }

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:
// input: string
// output: string index of first vowel 
// function name: firstVowel
// create an array of vowels
// iterate through the array with a for loop 
// return the index of the first instance of a vowel

// a) Create a test with expect statements for each of the variables provided.

describe("firstVowel", () => {
    it("function that takes in a string and logs the index of the first vowel.", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)

    })
})

// FAIL  ./code-challenges.test.js
// firstVowel
//   ✕ function that takes in a string and logs the index of the first vowel.

// ● firstVowel › function that takes in a string and logs the index of the first vowel.

//   ReferenceError: firstVowel is not defined

// b) Create the function that makes the test pass.

let firstVowel = (string2) => {
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < string2.length; i++) {
      if (vowels.includes(string2[i].toLowerCase())) {
        return i;
      }
    }
  }
  