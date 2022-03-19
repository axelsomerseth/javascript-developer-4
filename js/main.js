// Use zoo.js for class/object example
// Use zoo-fn.js for functional example
import { Animal, Dog, Bird } from "./zoo-fn.js";
import { add, concatArray } from "./pure-fn.js";
import { resolvePromises } from "./fetch.js";

const cricket = new Animal("cricket", "cri cri");
console.log(Animal.prototype);

const firulais = new Dog("firulais", "WOOF WOOF!!");
console.log(Dog.prototype);
console.log(Animal.prototype.hasOwnProperty("makeSound"));
console.log(Dog.prototype.hasOwnProperty("bark"));

const parrot = new Bird("parrot", "twit twit");
console.log(Bird.prototype);

const animalSound = document.getElementById("animal-sound");
const dogSound = document.getElementById("dog-sound");
const birdSound = document.getElementById("bird-sound");

animalSound.innerHTML = cricket.makeSound();
dogSound.innerHTML = firulais.makeSound();
birdSound.innerHTML = parrot.makeSound();

// Pure functions
console.log(add(2, 3)); // 5

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(concatArray(arr1, arr2));
console.log(arr1);
console.log(arr2);

// Work with remote api's;
resolvePromises();
