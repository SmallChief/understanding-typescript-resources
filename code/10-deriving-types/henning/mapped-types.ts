type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

// Define a type for the results of math operations:
// type Results = {
//   add: number;
//   substract: number;
// };
// This has the same keys as Operations which could become tedious for more complex objects!

// Instead, we can MAP the types
type Results<T> = {
  //   [K in keyof T]: number; // Map ALL properties - meaning ALL properties are required
  [K in keyof T]?: number; // Map ALL properties as optional properties
  //   [K in keyof T]-?: number; // Map ALL properties and remove the 'optional' flag
};

let mathOperations: Operations = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};

let mathResults: Results<Operations> = {
  add: mathOperations.add(2, 5),
  //   subtract: mathOperations.subtract(10, 5),
};

// This also works with 'readonly' properties
type ReadonlyOperations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type ReadonlyResults<T> = {
  readonly [K in keyof T]: number; // Map ALL properties as readonly properties
};

let readonlyMathOperations: ReadonlyOperations = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};
let readonlyMathResults: ReadonlyResults<ReadonlyOperations> = {
  add: readonlyMathOperations.add(2, 5),
  subtract: readonlyMathOperations.subtract(10, 5),
};
