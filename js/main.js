// 0. Placeholders
document.getElementById("animal-sound").innerHTML = "shsh";
document.getElementById("dog-sound").innerHTML = "woof woof";
document.getElementById("bird-sound").innerHTML = "cri cri";

// 1. Import
console.log("1. Import: ", _.upperCase("hola axel"));

// 2. Modules: ECMAScript Modules (import, export).
import { Animal, Dog, Bird } from "./zooFn.js";

// 3. Object Constructors: The New keyword, constructor function in classes.
const cricket = new Animal("pepito", "cri cri cri");
console.log("3. Object Constructors: ", cricket);

const clifford = new Dog("clifford", "woof woof");
console.log("3. Object Constructors: ", clifford);

const loro = new Bird("alberto", "twit twit");
console.log("3. Object Constructors: ", loro);

// 4. Classes: Animal, Dog, and Bird example: use `zoo.js`

// 5. Prototypes: How to handle prototypes: classes and functions examples.
// Go to zoo.js and zooFn.js

// 6. Factory Functions: Instance new objects with functions (constructor functions): use `zoo-fn.js`

// 7. OOP principles
// 7.a The instanceof operator
console.log("7.a clifford instanceof Dog: ", clifford instanceof Dog);

// 7.b Own properties (.hasOwnProperty).
// "makeSound" is an inherit property.
console.log(
  `7.b clifford.hasOwnProperty("makeSound"):`,
  clifford.hasOwnProperty("makeSound")
);
console.log(
  `7.b clifford.hasOwnProperty("name"):`,
  clifford.hasOwnProperty("name")
);

// 7.c Prototype properties.
console.log("7.c Prototype properties Dog.bark:", clifford.bark());

// 7.d Prototype chain.
console.log("7.d Prototype chain: Object.prototype ", Object.prototype);
console.log("7.d Prototype chain: Animal.prototype ", Animal.prototype);
console.log("7.d Prototype chain: Dog.prototype ", Dog.prototype);

// 7.e Constructor property.
console.log("7.e Constructor property: ", clifford.constructor);

// 7.f The isPrototypeOf method.
console.log(
  "7.f The isPrototypeOf method: ",
  Object.prototype.isPrototypeOf(Animal.prototype),
  Animal.prototype.isPrototypeOf(cricket)
);
console.log(
  "7.f The isPrototypeOf method: ",
  Animal.prototype.isPrototypeOf(Dog.prototype),
  Dog.prototype.isPrototypeOf(clifford)
);
console.log(
  "7.f The isPrototypeOf method: ",
  Animal.prototype.isPrototypeOf(Bird.prototype),
  Bird.prototype.isPrototypeOf(loro)
);

// 7.g Inheritance (don't repeat yourself).
// 7.h Use Object.create(<Generic.prototype>) to do Inheritance.
// 7.i Fixing constructors.
// Go to zoo.js and zooFn.js

// Updated UI: Uncomment
// document.getElementById("animal-sound").innerHTML = cricket.makeSound();
// document.getElementById("dog-sound").innerHTML = clifford.bark();
// document.getElementById("bird-sound").innerHTML = loro.makeSound();

// 8. Pure functions
import { add, concatArray } from "./pure.js";
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log("8. Pure functions: arr1", arr1);
console.log("8. Pure functions: arr2", arr2);
console.log("8. Pure functions: concat", concatArray(arr1, arr2));

// 9. Remote APIs
// 10. Array of promises
import { resolvePromises } from "./fetch.js";
resolvePromises();
