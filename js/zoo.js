class Animal {
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
    super(name, sound);
  }
  bark() {
    return this.sound;
  }
}

class Bird extends Animal {
  constructor(name, sound) {
    super(name, sound);
  }
}

export { Animal, Dog, Bird };
