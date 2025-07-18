/**
 * Generics in TypeScript
 */

// let names: string[] = ["Max", "Anna"];

// Can be also be written as:
let names: Array<string> = ["Max", "Anna"];

// This is a generic type that can be used with any type
// Generic types are types that need to work with other types to describe a value
// In this case, the names array is an "array of strings"

// Generic types are flexible

/**
 * Building a generic type
 */

// Earlier, we had a type for a data store that could hold different types of values.

// type DataStore = {
//   [key: string]: string | number | boolean;
// };

// We can make this type generic by using a type parameter:
type DataStore<T> = {
  [key: string]: T;
};

// Now, a developer can use this type with any type they want:
const stringStore: DataStore<string | number> = {
  name: "Max",
  age: 30,
};

/**
 * Generic functions and inheritance
 */

// If we take a look at a function 'merge' that should merge two values of the same type,
// we previously would have written it like this:
// function merge(a: any, b: any) {
//  return [a, b];
// }

// One of the problems with this function is that the type of the return value is lost due to the use of 'any'.

function merge<T>(a: T, b: T): T[] {
  return [a, b];
}

// As a result, the type of the return value is now preserved.
const merged = merge<string>("Max", "Anna"); // merged is of type string[]

// The angle brackets can be omitted if TypeScript can infer the type from the arguments:
const merged2 = merge(30, 25); // merged2 is of type number[]

// This would fail - TypeScript error!
// const result = merge("Hello", 42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'

// If we want to allow the function to accept two different types,
// we can use two type parameters:
function mergeDifferentTypes<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}

/**
 * Constraints in Generics
 */

// Sometimes, we want to restrict the types that can be used with a generic type.
function mergeObjects<T extends object>(a: T, b: T) {
  return { ...a, ...b };
}

const mergedObject = mergeObjects({ name: "Max" }, { age: 30 });
// This results in an object with both properties: { name: "Max", age: 30 }
// The return type of the function is quite complex because it combines the properties of both objects.
// function mergeObjects<{
//     name: string;
//     age?: undefined;
// } | {
//     age: number;
//     name?: undefined;
// }>(a: {
//     name: string;
//     age?: undefined;
// } | {
//     age: number;
//     name?: undefined;
// }, b: {
//     name: string;
//     age?: undefined;
// } | {
//     age: number;
//     name?: undefined;
// }): {
//     name: string;
//     age?: undefined;
// } | {
//     age: number;
//     name?: undefined;
// }

// This can be simplified using two type parameters:
function mergeObjectsSimplified<T extends object, U extends object>(
  a: T,
  b: U
) {
  return { ...a, ...b };
}

const mergedObjectSimplified = mergeObjectsSimplified(
  { name: "Max" },
  { age: 30 }
);

/**
 * Using Generics with Classes
 */

class DataStoreClass<T> {
  private data: T[] = [];

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }
  getByIndex(index: number): T | undefined {
    return this.data[index];
  }
}
