// src/functions.js

// 1. Function to add two numbers
export function add(a, b) {
  return a + b;
}

// 2. Function to subtract two numbers
export function subtract(a, b) {
  return a - b;
}

// 3. Function to multiply two numbers
export function multiply(a, b) {
  return a * b;
}

// 4. Function to divide two numbers
export function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}

// 5. Function to check if a number is even
export function isEven(num) {
  return num % 2 === 0;
}

// 6. Function to check if a number is odd
export function isOdd(num) {
  return num % 2 !== 0;
}

// 7. Function to find the maximum of two numbers
export function max(a, b) {
  return a > b ? a : b;
}

// 8. Function to find the minimum of two numbers
export function min(a, b) {
  return a < b ? a : b;
}

// 9. Function to calculate factorial of a number
export function factorial(n) {
  if (n < 0) throw new Error("Factorial is not defined for negative numbers");
  return n === 0 ? 1 : n * factorial(n - 1);
}

// 10. Function to check if a string is a palindrome
export function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[\W_]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
