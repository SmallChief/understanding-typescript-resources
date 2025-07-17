type FileSource = { path: string };
const fileSource: FileSource = {
  path: "some/path/to/file.csv",
};

type DBSource = { connectionUrl: string };
const dbSource: DBSource = {
  connectionUrl: "some-connection-url",
};

type Source = FileSource | DBSource;

function loadData(source: Source) {
  // Open + read file OR reach out to database server
  if ("path" in source) {
    // source.connectionUrl is present
    return;
  }

  // source.connectionUrl is present
}

// Alternatively use an additional parameter - a COMMON PROPERTY to create type guards
type FileSource2 = { type: "file"; path: string };
const fileSource2: FileSource2 = {
  type: "file",
  path: "some/path/to/file.csv",
};

type DBSource2 = { type: "db"; connectionUrl: string };
const dbSource2: DBSource2 = {
  type: "db",
  connectionUrl: "some-connection-url",
};

type Source2 = FileSource2 | DBSource2;

function loadData2(source: Source2) {
  if (source.type === "file") {
    // ...
    return;
  }

  //...
}

class User {
  constructor(public name: string) {}

  join() {
    // ...
  }
}

class Admin {
  constructor(permissions: string[]) {}

  scan() {
    // ...
  }
}

const user = new User("Max");
const admin = new Admin(["ban", "restore"]);

type Entity = User | Admin;

function init(entity: Entity) {
  if (entity instanceof User) {
    entity.join();
    return;
  }
  entity.scan();
}

function isFile(source: Source2) {
  return source.type === "file"; // returns a type predicate! Type Predicates are functions that return a boolean and narrow the type of the parameter
}
