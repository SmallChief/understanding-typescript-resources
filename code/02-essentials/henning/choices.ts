/**
 * Choices
 */

// When a fixed set of allowed values is allowed, an enum is a good option.
enum Role {
  Admin,
  Editor,
  Guest,
}

let userRole: Role = Role.Admin; // This is valid - Admin
userRole = 1; // This is also valid - Editor

// This is due to how enums work under the hood when compiled to JavaScript.
// Enums are just objects with numeric keys and values.
//Example of compiled JavaScript:
// var Role;
// (function (Role) {
//     Role[Role["Admin"] = 0] = "Admin";
//     Role[Role["Editor"] = 1] = "Editor";
//     Role[Role["Guest"] = 2] = "Guest";
// })(Role || (Role = {}));

/**
 * Literal Types
 *
 * Literal types are an alternative to enums when you want to restrict a variable to a specific set of values.
 * They are more type-safe and do not allow implicit conversions.
 */

let userStatus: "active" | "inactive" | "banned" = "active";
// userStatus = 'pending'; // This would cause a TypeScript error - 'pending' is not assignable to type 'active | inactive | banned'

// Works with tuples as well
let possibleValues: [1 | -1, number];
possibleValues = [1, 42];

/**
 * Type Aliases
 * Type aliases can be used to create more readable and maintainable code by giving a name to a type and allowing for reuse.
 */
type Make = "Toyota" | "Honda" | "Ford";
enum model {
  Corolla = "Corolla",
  Civic = "Civic",
  Focus = "Focus",
}

type Car = {
  make: Make; // Using the type alias for make
  model: model; // Using the enum for model
  year: number;
};

let myCar: Car = {
  make: "Toyota",
  model: model.Corolla,
  year: 2022,
};
export {};
