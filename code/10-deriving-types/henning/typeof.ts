// JavaScript has types, it just does not enforce it
const userName = "Max";
console.log(typeof userName);

// typescript ALSO has a typeof operator, it it used automatically depending on WHERE we use typeof
type UserName = typeof userName; // not possible in Javascript
// gotcha: in the above case since userName is a const and assigned 'Max' - TypeScript will use the more specific option and use 'Max' as the type!

// Complex Object
const settings = {
  difficulty: "easy",
  minLevel: 10,
  didStart: false,
  players: ["John", "Jane"],
};

// Could be defined as
// type Settings = {
//   difficulty: string;
//   minLevel: number;
//   didStart: boolean;
//   players: string[];
// };

// This might be due to changes later

type Settings = typeof settings; // This instead creates the exact matching Type dynamically
