/**
 * Arrays and Objects in TypeScript
 */

let hobbies = ["reading", "gaming", "hiking"]; // TypeScript infers this as string[]

// This will cause an error because 42 is not a string - making the array type-safe
// hobbies.push(42);

/**
 * Array with specific types
 */

let users: string[]; // 'users' is an array of strings
users = ["Alice", "Bob", "Charlie"]; // Assigning an array of strings

/**
 * Union Types in Arrays
 */
let numbers: (number | string)[]; // 'numbers' can be an array of numbers or strings
numbers = [1, 2, "three", "four"]; // Assigning an array with mixed types

// PARENTHESES ARE REQUIRED FOR UNION TYPES IN ARRAYS
let numbers2: number | string[];
// numbers2 = [1, 2, "three", "four"]; // This will cause an error because the type is incorrectly defined as a single number OR an array of strings
// numbers2 = 1; //this would work
// numbers2 = ["one", "two", "three"]; // So would this

// ALTERNATIVE SYNTAX FOR UNION TYPES IN ARRAYS
let numbers3: Array<number | string>; // This is equivalent to the previous union type array

/**
 * Tuple Types
 */
let person: [string, number]; // 'person' is a tuple with a string and a number
person = ["Alice", 30]; // Assigning a tuple with a string and a number
// person = [30, "Alice"]; // This will cause an error because the order of types is incorrect

/**
 * Object Types
 */

let user: {
  name: string;
  age: number;
  hobbies: string[];
  role: {
    admin: boolean;
    editor: boolean;
  };
};

user = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "gaming"],
  role: {
    admin: true,
    editor: false,
  },
};

/**
 * 'Must not be null or undefined' Type
 */

let val: {}; // From the declaration it looks like 'val' should be an empty object
val = {}; // So this is expected to work
val = "some string"; // But this is ALSO allowed

// This is because '{}' in TypeScript means 'any non-nullish value' (not just an empty object)

// That means, values that are not exepted are:
// val = null; // This will cause an error
// val = undefined; // This will also cause an error

/**
 * Record Type
 */

let data: Record<string, string | number>; // 'data' is a record with string keys and values that can be either string or number

data = {}; // Assigning an empty record

data = {
  name: "Alice",
  age: 30,
  city: "Wonderland",
}; // Assigning a record with string keys and mixed value types

export {};
