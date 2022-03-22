document.getElementById('animal-sound').innerHTML = 'shsh';
document.getElementById('dog-sound').innerHTML = 'wof wof';
document.getElementById('bird-sound').innerHTML = 'cri cri';

// 1. Import
console.log(_.upperCase('hola axel'));

// 2. Modules
import { Animal, Dog, Bird } from './zoo.js';

// 3. Constructor
const loro = new Bird('alberto', 'hola hola');
console.log(loro.makeSound());

// 4. Classes done
