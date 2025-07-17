/**
 * Class with private properties, getters, setters, and static members.
 */
class User {
  protected _firstName: string = "";
  private _lastName: string = "";

  // Setters are used to validate and set properties.
  set firstName(value: string) {
    if (value.trim() === "") {
      throw new Error("First name cannot be empty");
    }
    this._firstName = value;
  }

  set lastName(value: string) {
    if (value.trim() === "") {
      throw new Error("Last name cannot be empty");
    }
    this._lastName = value;
  }

  // Getters are used to access properties
  // and to get computed values.
  // getters are public by default
  get fullName(): string {
    return `${this._firstName} ${this._lastName}`;
  }

  // Static properties and methods are accessed on the class itself, not on instances.
  static entityId = "12345";

  // Useful for utility classes that group related functions.
  static greet(): string {
    return "Hello!";
  }
}

/**
 * Extending classes - Inheritance
 */

class Employee extends User {
  constructor(public jobTitle: string) {
    super();

    // Super can also be used to access the parent class's properties and methods.
    // this.firstName = "John"; // Using setter from User class
    // this.lastName = "Doe"; // Using setter from User class
  }

  work() {
    return `${this.fullName} is working as a ${this.jobTitle}`;
  }

  // Accessing properties from the parent class
  // private members are not accessible in child classes
  get printEmployeeInfo(): string {
    // return `Employee: ${this._firstName} ${this._lastName}, Job Title: ${this.jobTitle}`; // This will throw an error since _lastName is private
    return `Employee: ${this._firstName}, Job Title: ${this.jobTitle}`;
  }
}

/**
 * Abstract classes
 */

abstract class UIElement {
  constructor(public identifier: string) {}

  clone(targetLocation: string): void {
    // Logic to clone the UI element
  }
}

// Wrong:
// let button = new UIElement("button1"); // Cannot instantiate abstract class

class Button extends UIElement {
  constructor(identifier: string, public label: string) {
    super(identifier); // Call the constructor of the parent class
  }

  click(): void {
    console.log(`Button ${this.identifier} clicked`);
  }

  clone(targetLocation: string): void {
    super.clone(targetLocation); // Call the clone method from the parent class
    console.log(`Button cloned to ${targetLocation}`);
  }
}

export {};
