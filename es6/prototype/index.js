'use strict';
let hamster = {
    stomach: [],

    eat(food) {
    // assign to this.stomach instead of this.stomach.push
        this.stomach = [food];
    }
};

let speedy = {
   
};

console.log('speedy', speedy)

speedy.__proto__ = hamster

let lazy = {
    __proto__: hamster
};

console.log('lazy', lazy)

// Speedy one found the food
//speedy.eat("apple");
//alert( speedy.stomach ); // apple

// Lazy one's stomach is empty
alert( lazy.stomach ); // <nothing>
