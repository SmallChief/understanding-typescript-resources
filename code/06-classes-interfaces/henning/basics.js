"use strict";
/*
Basic class Syntax:

class User {
  // In Typescript we add properties directly to the class body instead of a constructor
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Altenative Syntax
 */
var User = /** @class */ (function () {
    // Using the 'public' or 'private' keywords in the constructor adds properties of the parameters name are created automatically
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        console.log("Hi, I am ".concat(this.name, ". I am ").concat(this.age, " years old."));
    };
    return User;
}());
/**
 * Readonly properties
 * Can be read and accessed but not assigned
 */
var UserWithReadonly = /** @class */ (function () {
    function UserWithReadonly(name, age) {
        this.name = name;
        this.age = age;
    }
    UserWithReadonly.prototype.greet = function () {
        console.log("Hi, I am ".concat(this.name, ". I am ").concat(this.age, " years old."));
    };
    UserWithReadonly.prototype.birthday = function () {
        this.age++;
    };
    return UserWithReadonly;
}());
// usage
var user = new UserWithReadonly("Henning", 30);
user.greet();
