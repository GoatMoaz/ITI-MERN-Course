# ITI ES6 Exercises

This project contains several JavaScript exercises to practice different concepts and functionalities. Below are the detailed instructions and descriptions for each exercise.

## Certifications

<image src="ES6 and beyond Certificate.png">
<image src="TypeScript Certificate.png">

## Table of Contents

1. [Sum of Two Numbers](#sum-of-two-numbers)
2. [Looping with Arrays](#looping-with-arrays)
3. [Spread Operator](#spread-operator)
4. [Student Class](#student-class)
5. [Displaying Tips](#displaying-tips)

## Sum of Two Numbers

### Task

Alert the sum of 2 numbers, and pass the sum as an argument to the alert function using a self-invoking function.

### Steps

1. Create a self-invoking function that takes two numbers as parameters.
2. Calculate the sum of the numbers.
3. Pass the sum to the `alert` function to display it.

## Looping with Arrays

### Task

Try `for...in`, `for...of`, and `.forEach()` with an array.

### Steps

1. Create an array.
2. Use `for...in` to iterate over the array indices.
3. Use `for...of` to iterate over the array values.
4. Use `.forEach()` to iterate over the array and perform an action on each element.

### Differences

- `for...in` iterates over the properties (keys) of an object.
- `for...of` iterates over the values of an iterable object.
- `.forEach()` is an array method that executes a function once for each array element.

## Spread Operator

### Task

Try the spread operator with any array of your implementation.

### Steps

1. Create an array.
2. Use the spread operator to expand the array elements into another array or function.

## Student Class

### Task

Create a student class that contains: name, university, faculty, and final grade.

### Steps

1. Define a `Student` class with the mentioned properties.
2. Create a method to print student data in the format:
   ```
   {Std_name} is a student in faculty of {fac_name} in university {Uni_name}
   ```

## Displaying Tips

### Task

Make a page that displays a tip for the user every 3 seconds.

### Steps

#### Create a Generator

1. Create a generator function that has an array of 10 tips.
2. Loop over the array and each time return the next tip.

#### Create a Button to Display All Tips

1. Create a button.
2. When clicked, loop over the generator and display all tips using `for...of`.

#### Create a Button to Display a Tip Every 3 Seconds

1. Create another button.
2. Use `setInterval` (with an arrow function) to display a tip every 3 seconds from the generator using `next()`.

## Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox)
- A code editor (e.g., VS Code, Sublime Text)

### Installation

1. Clone or download the repository to your local machine.
2. Open the project folder in your code editor.

### Running the Project

1. Open the `index.html` file in your web browser to view the application.
2. Follow the instructions provided in each section to complete the exercises.
