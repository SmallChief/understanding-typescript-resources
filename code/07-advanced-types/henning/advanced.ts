/**
 * Index Types
 */
type DataStore = {
  [key: string]: string | number | boolean;
};

/**
 * Arrays
 */

let roles = ["admin", "user", "editor"]; // string[] is inferred
roles.push("guest"); // This works, roles is a mutable array

// If instead we want to use a more narrow type, we can use the `as const` assertion
let rolesConst = ["admin", "user", "editor"] as const; // readonly ["admin", "user", "editor"] - This is a tuple type
// rolesConst.push("guest"); // Error: Property 'push' does not exist on type 'readonly ["admin", "user", "editor"]'.

/**
 * Using the 'satisfies' keyword to ensure the object matches the type
 */

const dataEntries = {
  entry1: 100,
  entry2: 200,
};

// dataEntries.entry3 // error: Property 'entry3' does not exist on type '{ entry1: number; entry2: number; }'.

const dataEntriesSatisfies = {
  entry1: 100,
  entry2: 200,
} satisfies Record<string, number>;

// Difference: The `satisfies` keyword allows us to ensure that the object matches the type without changing the inferred type of the object.
