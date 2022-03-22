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

function Bird(name, sound) {
	this.name = name;
	this.sound = sound;
}

export {Animal, Dog, Bird};