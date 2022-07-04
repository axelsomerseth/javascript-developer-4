// 6. Factory Functions: Instance new objects with functions (constructor functions).

function Animal(name, sound) {
  this.name = name;
  this.sound = sound;
}
// 7.g Inheritance (don't repeat yourself).
// 7.h Use Object.create(<Generic.prototype>) to do Inheritance.
Animal.prototype = Object.create(Object.prototype);
Animal.prototype.constructor = Animal;
Animal.prototype.makeSound = function () {
  return this.sound;
};

function Dog(name, sound) {
  this.name = name;
  this.sound = sound;
}
// 7.g Inheritance (don't repeat yourself).
// 7.h Use Object.create(<Generic.prototype>) to do Inheritance.
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  return this.makeSound();
};

function Bird(name, sound) {
  this.name = name;
  this.sound = sound;
}
// 7.g Inheritance (don't repeat yourself).
// 7.h Use Object.create(<Generic.prototype>) to do Inheritance.
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

export { Animal, Dog, Bird };
