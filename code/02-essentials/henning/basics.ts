// We can use standard JavaScript code directly in TypeScript files
console.log("Hello, TypeScript!");

// In JavaScript, variebles are typeless
let fruit; // We can declare a variable without a type - it will have the 'any' type
fruit = "banana";

// In TypeScript, we can specify the type of a variable
let vegetable: string;
vegetable = "carrot";

// If we assign a value, TypeScript will infer the type
let animal = "dog"; // TypeScript infers the type as string
console.log("animal is a ", typeof animal); // Outputs: string

// While JavaScript allows us to reassign variables to different types, TypeScript enforces type consistency
console.log(fruit);
fruit = 1;
console.log(fruit); // This will work even though it's not recommended in TypeScript

// TypeScript will throw an error if we try to assign a different type to a variable with a specific type
// vegetable = 1; // Uncommenting this line will cause a TypeScript error

// Full Syntax for declaring a variable with a type
let anotherFruit: string = "apple"; // Here we explicitly declare the type as string

/* Types of function parameters */

// Functions can also have type annotations for parameters
function greet(name: string) {
  console.log("Hello, " + name);
}

// Calling the function with a string
greet("Alice");

// Make this file a module to avoid global scope conflicts
export {};
