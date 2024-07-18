// 1) Self invoking function

(function () {
  let num1 = 5;
  let num2 = 10;
  alert("Check the console for the other tasks!");
  alert(`The sum of ${num1} and ${num2} is ${num1 + num2}`);
})();

// 2) The difference between for.in, for.of and forEach loops

let arr = [1, 2, 3, 4, 5];

// for...in iterates over the index (or key) in an array (or object)
console.log("for...in , array values = 1,2,3,4,5");

for (let index in arr) {
  console.log(index); // prints 0, 1, 2, 3, 4
}

// for...of iterates over the values in an array
console.log("for...of , array values = 1,2,3,4,5");

for (let value of arr) {
  console.log(value); // prints 1, 2, 3, 4, 5
}

// .forEach() method executes a provided function once for each array element
console.log("forEach , array values = 1,2,3,4,5");
arr.forEach((value, index) => {
  console.log(value); // prints 1, 2, 3, 4, 5
});

// 3) Spread Operator

let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // arr2 is now [1, 2, 3, 4, 5]

// 4) Create a student class

class Student {
  constructor(name, university, faculty, finalGrade) {
    this.name = name;
    this.university = university;
    this.faculty = faculty;
    this.finalGrade = finalGrade;
  }
}

// 5) Print Student Data

let student = new Student("John", "Harvard", "Computer Science", "A");
console.log(
  `${student.name} is a student in faculty of ${student.faculty} in university ${student.university}`
);

// 6) Display a tip for the user every 3 seconds

// a. Create a generator
function* tipGenerator() {
  let tips = [
    "Tip 1",
    "Tip 2",
    "Tip 3",
    "Tip 4",
    "Tip 5",
    "Tip 6",
    "Tip 7",
    "Tip 8",
    "Tip 9",
    "Tip 10",
  ];
  let index = 0;
  while (index < tips.length) {
    yield tips[index % tips.length];
    index++;
  }
}

// b. Button to display all tips
let generator = tipGenerator();
let tips = document.getElementById("tips");

document.getElementById("displayAllTips").addEventListener("click", () => {
  tips.innerHTML = "";
  let generator = tipGenerator();
  for (let tip of generator) {
    tips.innerHTML += `<li>${tip}</li>`;
  }
});

// c. Button to display a tip every 3 seconds
let intervalId;

document.getElementById("displayTipEvery3Sec").addEventListener("click", () => {
  tips.innerHTML = "";
  let generator = tipGenerator();
  if (intervalId) {
    clearInterval(intervalId);
  }
  intervalId = setInterval(() => {
    let nextTip = generator.next();
    if (nextTip.done) {
      clearInterval(intervalId);
    } else {
      tips.innerHTML += `<li>${nextTip.value}</li>`;
    }
  }, 3000);
});
