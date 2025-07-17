/*
Basic class Syntax:

class User {
  // In Typescript we add properties directly to the class body instead of a constructor
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
*/

/**
 * Altenative Syntax
 */

class User {
  // Using the 'public' or 'private' keywords in the constructor adds properties of the parameters name are created automatically
  constructor(public name: string, private age: number) {}

  greet() {
    console.log(`Hi, I am ${this.name}. I am ${this.age} years old.`);
  }
}

export {};

/**
 * Readonly properties
 * Can be read and accessed but not assigned
 */

class UserWithReadonly {
  readonly something = "This is read-only";
  constructor(public readonly name: string, private age: number) {}

  greet() {
    console.log(`Hi, I am ${this.name}. I am ${this.age} years old.`);
  }

  birthday() {
    this.age++;
  }
}

// Usage
const user = new UserWithReadonly("Henning", 30); // Create and set name - this is allowed
console.log(user.something); // This is read-only
// user.something = "New value"; // Error: Cannot assign to 'something' because it is a read-only property
// user.name = "Max"; // Error: Cannot assign to 'name' because it is a read-only property

user.greet();
user.birthday();
user.greet(); // Now age is incremented
