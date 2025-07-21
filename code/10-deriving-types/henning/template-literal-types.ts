/**
 * Template Literal Types
 */

// A template literal in standard JavaScript is a string that can include expressions
// using backticks and `${}` syntax.
const mainUserName = "Henning";
const greeting = `Hello, ${mainUserName}!`; // "Hello, Henning!"

// In TypeScript, we can use template literal types to create types that are constructed
// from other types using a similar syntax.

// Consider this Problem:

// In a project, we have different permissions for files.
type ReadPermissions = "no-read" | "read";
type WritePermissions = "no-write" | "write";

// We want to create a type that combines these permissions into a single type
// that represents all possible combinations of read and write permissions.

// type FilePermissions = 'no-read_no-write' | 'no-read_write' | 'read-no_write' | 'read_write';

// This is, however, not very scalable. If we add more permissions, we would have to manually
// update the `FilePermissions` type.

// Instead, we can use template literal types to automatically generate this type based on the
// individual permissions:
type FilePermissions = `${ReadPermissions}_${WritePermissions}`;

/**
 * Other Examples
 */
type DataFile = {
  data: string;
  permissions: FilePermissions;
};

type DataFileEventNames = `${keyof DataFile}Changed`;

type DataFileEvents = {
  [K in DataFileEventNames]: () => void;
};
