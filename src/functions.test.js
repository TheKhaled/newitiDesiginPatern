import { describe, it, expect } from "vitest";
import {
  add,
  subtract,
  multiply,
  divide,
  isEven,
  isOdd,
  max,
  min,
  factorial,
  isPalindrome,
} from "./assets/src/FileToTest/fn";

describe("Math and Utility Functions", () => {
  // Test add function
  it("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  // Test subtract function
  it("should subtract two numbers correctly", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
  });

  // Test multiply function
  it("should multiply two numbers correctly", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
  });

  // Test divide function
  it("should divide two numbers correctly", () => {
    expect(divide(6, 3)).toBe(2);
    expect(() => divide(1, 0)).toThrow("Cannot divide by zero");
  });

  // Test isEven function
  it("should return true for even numbers", () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(0)).toBe(true);
    expect(isEven(-4)).toBe(true);
  });

  it("should return false for odd numbers", () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(-3)).toBe(false);
  });

  // Test isOdd function
  it("should return true for odd numbers", () => {
    expect(isOdd(1)).toBe(true);
    expect(isOdd(3)).toBe(true);
    expect(isOdd(-5)).toBe(true);
  });

  it("should return false for even numbers", () => {
    expect(isOdd(2)).toBe(false);
    expect(isOdd(4)).toBe(false);
  });

  // Test max function
  it("should return the maximum of two numbers", () => {
    expect(max(2, 3)).toBe(3);
    expect(max(-1, -2)).toBe(-1);
  });

  // Test min function
  it("should return the minimum of two numbers", () => {
    expect(min(2, 3)).toBe(2);
    expect(min(-1, -2)).toBe(-2);
  });

  // Test factorial function
  it("should calculate the factorial of a number", () => {
    expect(factorial(5)).toBe(120);
    expect(factorial(0)).toBe(1);
    expect(() => factorial(-1)).toThrow(
      "Factorial is not defined for negative numbers"
    );
  });

  // Test isPalindrome function
  it("should correctly identify palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });
});
