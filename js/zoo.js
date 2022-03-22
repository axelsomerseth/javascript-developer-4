class Animal {
	constructor(name, sound) {
		this.name = name;
		this.sound = sound;
	}

	makeSound() {
		return this.sound;
	}
}

class Dog {}

class Bird {}

export { Animal };