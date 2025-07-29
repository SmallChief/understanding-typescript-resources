// Experimental Decorators receive a varyng amount of arguments, in the case of a class it is 1 - the target is the constructor
// Note: Decorators execute when they are defined, not when their parent is initiated
function Logger(logString: string) {
  console.log("Logger factory");
  return function (constructor: Function) {
    console.log("Logging...");
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("Template factory");
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("LOGGING - PERSON") // Multiple decorators can be applied to a class
@WithTemplate("<h1>My person Object</h1>", "app") // The factory functions are executed in the order they are defined - but the decorators are executed in reverse order
class Person {
  name = "Max";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property decorator!");
  console.log(target, propertyName);
}

function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log("Accessor Descriptior");
  console.log(target);
  console.log(name);
  console.log(descriptor);
}

function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  console.log("Method Descriptior");
  console.log(target);
  console.log(name);
  console.log(descriptor);
  return {};
}

function Log4(target: any, name: string | Symbol, position: number) {
  console.log("Method Descriptior");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log2
  set price(val: number) {
    if (val < 0) {
      throw new Error("Invalid price - should be positive!");
    }
    this._price = val;
  }

  get price() {
    return this._price;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

function Autobind(_: any, _2: string | Symbol, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this); // this -> object that defined the original Method
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works";
  @Autobind // runs autobind decorator - binding 'this' in showMessage to Printer (the Object defining showMethod)
  showMessage() {
    console.log(this.message);
  }
}

const printer = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", printer.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['positive', 'required']
  };
}
const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name], // Spread operator to merge existing validators
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop]; // Check if the property is defined and not null
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0; // Check if the property is a positive number
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;
  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;

courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid Input");
    return;
  }
  console.log(createdCourse);
});
