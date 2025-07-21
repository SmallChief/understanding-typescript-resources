/**
 * Infer keyword
 */

function add(x: number, y: number): number {
  return x + y;
}

type AddFn = typeof add;
type ReturnValueType<T> = T extends (...args: any[]) => infer R ? R : never; // IF T is a function, infer R as the return type

/**
 * Generic function syntax
 * any[] is a tuple type that can hold any number of elements.
 * ...args uses the rest parameter to 'unpack' the arguments.
 * This syntax allows us to accept a function with any number of arguments
 * So T expects a function with any number of parameters.
 */

/**
 * infer keyword
 *
 */

type AddFunReturnType = ReturnValueType<AddFn>; // AddFn is a function, so we can infer its return type
