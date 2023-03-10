let animal = {
    eats: true,
}

function Rabbit(name) {
    this.name = name;
}

Rabbit.prototype = animal;

let rabbit = new Rabbit("White Rabbit"); // rabbit.__proto__ == animal

console.log(rabbit.eats);




function User(name) {
    this.name = name;
}

// User.prototype = {}; ---------- С этой строчкой работать не будет!!!

let user = new User("Pete");
let user2 = new user.constructor("Dima");

console.log(user2.name)