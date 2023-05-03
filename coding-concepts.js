// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
console.log(cohort.split(""))

// a) Your answer: .split will split all characters into their own index
// b) Verify and explain: [
//   'C', 'h', 'a', 'r',
//   'l', 'i', 'e', ' ',
//   '2', '0', '2', '3'
// ] . this is because .split is a method that splits a string into an array of substrings

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello LEARN Student!
// b) Verify and explain: undefined. There is no return statement to return the message from the function

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: it will return each value in the array doubled
// b) Verify and explain: [ 8, 10, 12, 14, 16 ], .map iterates through the array, takes each value and returns that value * 2 into a new array

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: onlyOdds will be only the odd numbers of the array 
// b) Verify and explain: [ 11, 13, 15 ], .filter iterates through the array and returns only the odds numbers due to the conditional statement number % 2 !==0

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Javascript, first the object is looked at then the languages key value pair, and [0] points to the index 0 within the langauges array

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: George will be added to student. 
// b) Verify and explain: Learn { student: 'George', cohort: 'Charlie', year: 2023 }, george is passed to the parameter name in the constructor class 
