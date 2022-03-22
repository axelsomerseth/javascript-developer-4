document.getElementById('animal-sound').innerHTML = 'shsh';
document.getElementById('dog-sound').innerHTML = 'wof wof';
document.getElementById('bird-sound').innerHTML = 'cri cri';

// 1. Import
console.log(_.upperCase('hola axel'));

// 2. Modules
import { Animal } from './zoo.js';

const loro = new Animal('alberto', 'hola hola');
console.log(loro.makeSound());