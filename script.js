/* ===========================================
   Week 5 Assignment - Mastering JavaScript Fundamentals
   Author: GITAHIMUTHOMI
   =========================================== */

/* -------------------------------
   🌟 PART 1: JavaScript Basics
   Variables, Data Types, Conditionals
---------------------------------- */

// Get HTML elements
const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const resultMessage = document.getElementById("resultMessage");

// Event listener for button click
checkAgeBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const age = Number(ageInput.value);

  if (!name || !age) {
    resultMessage.textContent = "Please enter both your name and age.";
    resultMessage.style.color = "red";
    return;
  }

  // Conditional logic
  if (age < 18) {
    resultMessage.textContent = `Hi ${name}, you are a minor. Keep learning!`;
  } else if (age >= 18 && age <= 60) {
    resultMessage.textContent = `Welcome ${name}, you are an adult. Keep coding!`;
  } else {
    resultMessage.textContent = `Hello ${name}, age is just a number — keep growing!`;
  }

  resultMessage.style.color = "green";
});

/* -------------------------------
   💡 PART 2: Functions
   Creating reusable blocks of logic
---------------------------------- */

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const sumBtn = document.getElementById("sumBtn");
const multiplyBtn = document.getElementById("multiplyBtn");
const calcResult = document.getElementById("calcResult");

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to multiply two numbers
function multiplyNumbers(a, b) {
  return a * b;
}

// Event listeners for buttons
sumBtn.addEventListener("click", () => {
  const a = Number(num1.value);
  const b = Number(num2.value);
  calcResult.textContent = `Sum = ${addNumbers(a, b)}`;
});

multiplyBtn.addEventListener("click", () => {
  const a = Number(num1.value);
  const b = Number(num2.value);
  calcResult.textContent = `Product = ${multiplyNumbers(a, b)}`;
});

/* -------------------------------
   🔁 PART 3: Loops
   Practicing iteration and repetition
---------------------------------- */

const generateListBtn = document.getElementById("generateListBtn");
const numberList = document.getElementById("numberList");

generateListBtn.addEventListener("click", () => {
  numberList.innerHTML = ""; // clear existing list

  // Using a for loop to generate numbers 1 to 10
  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = `Number ${i}`;
    numberList.appendChild(li);
  }
});

/* -------------------------------
   🌐 PART 4: DOM Manipulation
   Making the page interactive
---------------------------------- */

const toggleModeBtn = document.getElementById("toggleModeBtn");
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    toggleModeBtn.textContent = "Switch to Light Mode";
  } else {
    toggleModeBtn.textContent = "Switch to Dark Mode";
  }
});
