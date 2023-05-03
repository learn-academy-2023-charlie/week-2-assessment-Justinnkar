# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer:
A parameter is a placeholder for a value to be interpeted. An argument is a value passed into a parameter to be assessed.  
Researched answer:
A parameter is a varible in a function of method definition that receives a value when the function is called. An argument is the actual value passed when the function is called.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer:
The current Value, The Index or location of the value, and the Array. You must use any parameters in order so if array is needed value and index must also be used.
Researched answer:
The current element being processed in the array, the index of the element being processed, the array that the .map method was called on. The current value is the only parameter required, the index and array are optional.

3. What is the difference between map and filter?

Your answer:
.map iterates through an array and creates a new array with the same amount of elements. .filter iterates through an array and creates a new array with a changed amount of elements.
Researched answer:
The map() method is used to create a new array by calling a function on each element of the original array. The function can transform the element in some way or extract some data from it, but it must return a value. The new array will have the same length as the original array, and each element will correspond to the return value of the function for the corresponding element in the original array.

The filter() method, on the other hand, is used to create a new array with all elements that pass the test implemented by the provided function. The function should return a boolean value that determines whether the element should be included in the new array or not. The new array may have a different length than the original array, depending on how many elements pass the test.

1. What is iteration?

Your answer:
Iteration is the process of repeating a set of instructions a specified number of times or until a certain condition is met.
Researched answer:
Iteration refers to the process of repeatedly executing a set of instructions or operations until a specific condition is met.

1. What is the difference between a function and a method?

Your answer:
A function is a block of code that performs a specfic task, and can be called upon. A method is a function but associated with an object or class.
Researched answer:
A function is a standalone piece of code that can be called from anywhere, while a method is a function that is associated with an object or class and operates on its data.
6. STRETCH: What is hoisting in JavaScript?

Your answer:
Hoisting is when a variable or function is moved to the top of the program.
Researched answer:
Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed. This means that you can use a variable or function before it is declared in your code.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Component:
A component is a reusable piece of code in React that defines how a part of a user interface should appear and behave. In React, a component is typically created using a JavaScript class or a function that returns a JSX element. A component can have its own state, properties (props), and methods. Components can be combined to create more complex user interfaces.

2. Spread operator:
The spread operator is a syntax in JavaScript that allows an iterable (like an array or object) to be expanded into individual elements or properties. It is represented by three dots ... and can be used in a variety of ways, such as to spread the elements of an array as arguments to a function or to merge objects. The spread operator provides a concise way to manipulate arrays and objects and can help to make code more readable and maintainable.

3. React state:
React state is an object that represents the current state of a component in a React application. State can be used to store and manage data that can change over time, such as user input, network responses, or component interactions. When state changes, React will automatically re-render the component to update the user interface to reflect the new state. State should be used sparingly and only for data that affects the rendering of the component.

4. React props:
React props (short for "properties") are a way to pass data from one component to another in a React application. Props are passed as attributes to a component in JSX and are read-only within the component. Props can be used to customize the behavior or appearance of a component based on the data passed to it. In contrast to state, props are used to pass data down the component tree, from parent components to child components.

5. DOM events:
DOM (Document Object Model) events are actions that occur in a web browser, such as a mouse click, a keyboard press, or a page load. JavaScript can be used to detect and respond to these events, by attaching event listeners to HTML elements. Event listeners are functions that are called when an event occurs, and can be used to perform actions or update the user interface in response to user input. DOM events are a key part of interactive web development and allow developers to create dynamic and engaging user experiences.