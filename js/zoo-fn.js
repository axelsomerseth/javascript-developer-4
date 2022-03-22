function Animal(name, sound) {
	this.name = name;
	this.sound = sound;
}
Animal.prototype = Object.create(Object.prototype);
Animal.prototype.constructor = Animal;
Animal.prototype.makeSound = function() {
	return this.sound;
}

function Dog(name, sound) {
	this.name = name;
	this.sound = sound;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

function Bird(name, sound) {
	this.name = name;
	this.sound = sound;
}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

export {Animal, Dog, Bird};