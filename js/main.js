document.getElementById('animal-sound').innerHTML = 'shsh';
document.getElementById('dog-sound').innerHTML = 'wof wof';
document.getElementById('bird-sound').innerHTML = 'cri cri';

// 1. Import
// console.log(_.upperCase('hola axel'));

// 2. Modules
import { Animal, Dog, Bird } from './zoo.js';

// 3. Constructor
const loro = new Bird('alberto', 'twit twit');
console.log(loro);

// 4. Classes done


// 5. Prototypes
const cricket = new Animal('pepito', 'cri cri cri');
console.log(cricket);