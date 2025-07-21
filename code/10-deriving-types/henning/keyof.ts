type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User;

let validKey: UserKeys; // "name" | "age"

validKey = "name";
validKey = "age";

/**
 * Where this is useful
 *
 * Notes:
 * 'keyof' creates literal types - so '"name" | "age"' as a literal set of allowed strings
 * 'extends' as used here is used to set a 'generic constraint'
 */
function getProp<T extends object, K extends keyof T>(obj: T, key: K) {
  const val = obj[key];
  if (val === undefined || val === null) {
    throw new Error("Accessing undefined or null value");
  }
  return val;
}

const user = { name: "max", age: 35 };
const val = getProp(user, "age"); // TypeScript correctly infers value here so intellisense works =)
