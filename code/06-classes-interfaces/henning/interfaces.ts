// Interface names typically describe the role of the object they represent.
// In this case, the interface represents an object that can be authenticated - it IS authenticatable.

interface Authenticatable {
  // Objects that are authenticatable must have a number of properties and methods.

  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// The interface defines a contract that any object implementing it must adhere to.

// In this case the wording of the contract could be:
// "An object is authenticatable if it has an email, a password, and methods to
// login and logout."

/**
 * Why use interfaces instead of classes or types?
 *
 * for example:
 *
 * type Authenticatable = {
 *   email: string;
 *   password: string;
 *   login(): void;
 *   logout(): void;
 * };
 */

// Declaration merging allows you to extend interfaces.

interface Authenticatable {
  // Additional properties or methods can be added later.
  isAuthenticated: boolean;
}

let user: Authenticatable = {
  email: "john.doe@mail.com",
  password: "securepassword",
  login() {
    // Call database, check credentials, etc.
    console.log("User logged in");
  },
  logout() {
    // clear session, etc.
    console.log("User logged out");
  },
  isAuthenticated: false,
};

// Defining functions types
// Typically this would be done with a type but interfaces can be used as well.

/**
 * type AuthFunction = (email: string, password: string) => boolean;
 */

interface AuthFunction {
  (email: string, password: string): boolean;
}

class AuthenticatableUser implements Authenticatable {
  constructor(
    public email: string,
    public password: string,
    public isAuthenticated: boolean = false
  ) {}

  login() {
    // Call database, check credentials, etc.
    console.log("User logged in");
    this.isAuthenticated = true;
  }
  logout() {
    // clear session, etc.
    console.log("User logged out");
    this.isAuthenticated = false;
  }
}

// ...

function authenticate(user: Authenticatable) {
  if (user.email && user.password) {
    user.login();
  } else {
    console.log("Authentication failed");
  }
}

/**
 * Extending interfaces
 * You can create a new interface that extends an existing one to add more properties or methods without modifying the original interface (as with merging).
 */

interface AdminAuthenticatable extends Authenticatable {
  adminRights: string[];
  grantRights(rights: string[]): void;
  revokeRights(rights: string[]): void;
}
