/**
 * Special Types in TypeScript
 */

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

// These types are not very useful on their own, but they can be used in union types.
let maybeString: string | null;
let maybeNumber: number | undefined;

export {};
