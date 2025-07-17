/**
 * Intersection Types
 */

type FileData = {
  path: string;
  content: string;
};

type Status = {
  isOpen: boolean;
  errorMessage?: string;
};

// Instead of defining a new type for accessed file data and manually combining the properties,
// we can use intersection types to combine FileData and Status.

// To do this, we use the `&` operator to create a new type that includes all properties from both FileData and Status.
type AccessedFileData = FileData & Status;

// Now, AccessedFileData has all properties from both FileData and Status.
// If we additionally wanted to acces different data sources, we could reuse the Status type.

type DatabaseData = {
  id: number;
  name: string;
};

type AccessedDatabaseData = DatabaseData & Status;

// Could of course also be done using interfaces and the 'extends' keyword
// interface FileData {
//  path: string;
//  content: string;
// }
// interface Status {
//  isOpen: boolean;
//  errorMessage?: string;
// }
// interface AccessedFileData extends FileData, Status {}
// etc.
