/**
 * Conditional types
 * - especially useful for helper types
 */

type StringArray = string[];
type ElementType = StringArray[number]; // string

let text = 1;

// We can use conditional types to set a specific type based on a condition
type GetElementType<T> = T extends any[] ? T[number] : never;

type Example1 = GetElementType<StringArray>; // string
type Example2 = GetElementType<typeof text>; // never - text is not an array

type FullNamePerson = {
  firstName: string;
  lastName: string;
};
type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
  if (
    "firstName" in person &&
    "lastName" in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
  }
  throw new Error("Invalid person object");
}

const name1 = getFullName({}); // Uncaught Runtime Error: Invalid person object
const name2 = getFullName({ firstName: "John", lastName: "Doe" }); // "John Doe"
