// 4. Classes: Animal, Dog, and Bird example.
class Animal {
  // 3. Object Constructors: The New keyword, constructor function in classes.
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  makeSound() {
    return this.sound;
  }
}

class Dog extends Animal {
  constructor(name, sound) {
    // 7.g Inheritance (don't repeat yourself).
    super(name, sound);
  }
  bark() {
    return super.makeSound();
  }
}

class Bird extends Animal {
  constructor(name, sound) {
    // 7.g Inheritance (don't repeat yourself).
    super(name, sound);
  }
}

export { Animal, Dog, Bird };
