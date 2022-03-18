import { Animal, Dog, Bird } from './zoo.js';

const cricket = new Animal('cricket', 'cri cri');
console.log(Animal.prototype);


const firulais = new Dog('firulais', 'WOOF WOOF!!');
console.log(Dog.prototype);
console.log(Animal.prototype.hasOwnProperty('makeSound'));
console.log(Dog.prototype.hasOwnProperty('bark'));

const parrot = new Bird('parrot', 'twit twit');
console.log(Bird.prototype);


const animalSound = document.getElementById('animal-sound');
const dogSound = document.getElementById('dog-sound');
const birdSound = document.getElementById('bird-sound');

animalSound.innerHTML = cricket.makeSound();
dogSound.innerHTML = firulais.makeSound();
birdSound.innerHTML = parrot.makeSound();