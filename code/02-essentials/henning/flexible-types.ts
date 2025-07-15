/**
 * Type 'any' in TypeScript
 */

let age: any; // 'any' type allows any value
age = 25; // Assigning a number
age = "twenty-five"; // Now assigning a string
age = true; // Now assigning a boolean

// This sacrifices type safety, shoud be used as a last resort

/**
 * Union Types
 */
let id: string | number; // 'id' can be either a string or a number
id = "12345"; // Assigning a string
id = 67890; // Now assigning a number

// This allows flexibility while still providing some type safety
export {};
