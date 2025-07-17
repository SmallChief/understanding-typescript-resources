/**
 * This function takes a string or an array and returns the length of the input.
 */

function getLength(val: string | any[]): number | string {
  if (typeof val === "string") {
    // val is a string
    const numWords = val.split(" ").length;
    return `The string has ${numWords} words.`;
  }

  return val.length;
}

// This works BUT the return type is not very useful if we want to work with the result
// const result = getLength("Hello World");
// result.length; // Error: Property 'length' does not exist on type 'string | number'.

/**
 * Function Overloading
 */

// TypeScript allows us to define multiple signatures for a function.

function getLengthOverloaded(val: string): string;
function getLengthOverloaded(val: any[]): number;
function getLengthOverloaded(val: string | any[]): string | number {
  if (typeof val === "string") {
    // val is a string
    const numWords = val.split(" ").length;
    return `The string has ${numWords} words.`;
  }

  return val.length;
}

/**
 * Using the overloaded function
 */
const resultString = getLengthOverloaded("Hello World");
console.log(resultString.length); // TypeHints work and we get no error, resultString is a string
