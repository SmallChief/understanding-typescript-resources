/**
 * Functions in TypeScript
 */

// Types can be used to define the parameters

function add(a: number, b: number) {
  return a + b;
}

// But you can also specify the return type explicitly
function multiply(a: number, b: number): number {
  return a * b;
}

// NOTE: If you don't specify a return type, TypeScript will infer it based on the function's implementation.
// For example, add() will return a number, so TypeScript infers the return type as number.

/**
 * void Functions
 * These functions do not return a value. void does not need to be explicitly specified, but it can be used for clarity and safety.
 */

// implicit:
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

// explicit:
function logMessage(message: string): void {
  console.log(message);
  // The return type is void, meaning this function does not return a value.
  // If you try to return a value, TypeScript will give an error.
}

/**
 * 'never' Functions
 * These functions not only do not return a value, but they also never complete execution.
 */

function logError(message: string): void {
  console.error(message);
  // This function does not return a value, but it DOES complete execution - so it is a void function.
}

// This function will never complete execution - meaning it NEVER returns a value.
function logAndThrowError(message: string): never {
  console.error(message);
  throw new Error(message); // This function will never return a value.
}

/**
 * Functions as Values (First-Class Functions)
 */

export {};
