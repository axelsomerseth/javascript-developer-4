document.getElementById('animal-sound').innerHTML = 'shsh';
document.getElementById('dog-sound').innerHTML = 'wof wof';
document.getElementById('bird-sound').innerHTML = 'cri cri';

// 1. Import
// console.log(_.upperCase('hola axel'));

// 2. Modules
import { Animal, Dog, Bird } from './zoo-fn.js';

// 3. Constructor
const loro = new Bird('alberto', 'twit twit');
console.log(loro);

// 4. Classes done


// 5. Prototypes
const cricket = new Animal('pepito', 'cri cri cri');
console.log(cricket);

// 6. factory functions done
const clifford = new Dog('clifford', 'woof woof');
console.log(clifford);

// 7. OOP principles
console.log(Animal.prototype.isPrototypeOf(cricket)); // true
console.log(Bird.prototype.isPrototypeOf(loro)); // true
console.log(Dog.prototype.isPrototypeOf(clifford)); // true


// 8. Pure functions
import { add, concatArray } from './pure.js';
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(concatArray(arr1, arr2));
console.log(arr1);
console.log(arr2);


// 9. Remote APIs 
// 10. Array of promises 
import { resolvePromises } from './fetch.js';
resolvePromises();