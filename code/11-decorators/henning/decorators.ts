/**
 * Decorators in TypeScript
 * Decorators are basicly functions that are prefixed with the @ symbol.
 * They can be used to modify classes, methods, accessors, properties, or parameters.
 */

// Decorator function
// A Decorator needs to accept at least one argument, which is the target of the decorator.
// In this case, we are using a class decorator.
function logger<T extends new (...args: any[]) => any>(
  target: T,
  ctx: ClassDecoratorContext
) {
  console.log("logger decorator");
  console.log(target);
  console.log(ctx);

  return class extends target {
    constructor(...args: any[]) {
      super(...args);
      console.log("class constructor");
      console.log(this);
    }
  };
}

function fieldLogger(target: undefined, ctx: ClassFieldDecoratorContext) {
  console.log(target);
  console.log(ctx);

  // To change the value, do not return a value but a function that manipulates the original value
  return (initialValue: any) => {
    console.log(initialValue);
    return ""; // Change field value to an empty string
  };
}

// Replacer Factorie
function replacer<T>(initValue: T) {
  return function replacerDecorator(
    target: undefined,
    ctx: ClassFieldDecoratorContext
  ) {
    console.log(target);
    console.log(ctx);

    // To change the value, do not return a value but a function that manipulates the original value
    return (initialValue: any) => {
      console.log(initialValue);
      return initValue; // Change field value to an empty string
    };
  };
}

function autobind(target: Function, ctx: ClassMethodDecoratorContext) {
  ctx.addInitializer(function (this: any) {
    this[ctx.name] = this[ctx.name].bind(this);
  });

  return function (this: any) {
    console.log("Executing original function");
    target.apply(this); // Need to apply 'this# here as well as target points to the unmodified function (no initializer)
  };
}

@logger
class Person {
  @fieldLogger
  name = "Max";

  @replacer("") // This points to a decorator-factory which returns a decorator function, using the parameters set here
  lastName = "Meyer";

  @autobind
  greet() {
    console.log("Hello, I am " + this.name);
  }
}

const max = new Person();
const greet = max.greet; // Method pointer - this binding gets lost without 'autobind' decorator
greet();
// Without 'autobind' we could add a constructor in the class and bind 'this' to the method
