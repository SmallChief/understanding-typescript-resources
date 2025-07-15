const inputElement = document.getElementById("input");
// console.log(inputElement.value); // This will throw tow errors:
// 1. Object is possibly 'null'.
// 2. Property 'value' does not exist on type 'HTMLElement | null'.

if (!inputElement) {
  throw new Error("Input element not found");
}
// console.log(inputElement.value);
// Now the type is narrowed to HTMLElement and we get only one error:
// Property 'value' does not exist on type 'HTMLElement'.

/**
 * ! - TypeScript's Non-Null Assertion Operator
 * The non-null assertion operator (`!`) can be used to tell TypeScript that a value is not null or undefined.
 * This is useful when you are SURE that a value will not be null or undefined at runtime
 * but TypeScript cannot infer that from the code.
 *
 * DANGER: Use this operator with caution, as it can lead to runtime errors if your assumption is incorrect.
 */

const inputElement2 = document.getElementById("input2")!;
console.log(inputElement2.children); // No error, TypeScript assumes inputElement2 is

/**
 * ?. - Optional Chaining Operator
 * The optional chaining operator (`?.`) allows you to safely access deeply nested properties of an object
 */

const inputElement3 = document.getElementById("input3");
console.log(inputElement3?.children);
// No error, TypeScript assumes inputElement3 might be null or undefined. It will fail gracefully and return undefined if inputElement3 is null or undefined.

/**
 * Type Casting / Type Assertion
 * Type casting (or type assertion) is a way to tell TypeScript to treat a value as a specific type.
 * This is useful when you know more about the type of a value than TypeScript does.
 */

const inputElement4 = document.getElementById("input4") as HTMLInputElement;
console.log(inputElement4.value); // No error, TypeScript now knows inputElement4 is an HTMLInputElement

// CAREFUL: Type casting can lead to runtime errors if the value is not of the asserted type.
// For example, if inputElement4 is not an HTMLInputElement, accessing 'value' will throw an error at runtime.
