function Animal (name, sound) {
	this.name = name;
	this.sound = sound;
};
Animal.prototype = Object.create(Object.prototype);
Animal.prototype.constructor = Animal;
Animal.prototype.makeSound = function() {
	return this.sound;
}

function Dog() {};
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
	return this.sound;
}

function Bird() {};
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

export { Animal, Dog, Bird };