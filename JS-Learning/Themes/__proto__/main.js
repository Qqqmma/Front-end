// let animal = {
//     jumps: null,
// };

// let rabbit = {
//     __proto__: animal,
//     jumps: true,
// };



// console.log(rabbit.jumps);
// delete rabbit.jumps;
// console.log(rabbit.jumps);
// delete animal.jumps;
// console.log(rabbit.jumps);

// let head = {
//     glasses: 1,
// };

// let table = {
//     __proto__: head,
//     pen: 3,
// };

// let bed = {
//     __proto__: table,
//     sheet: 1,
//     pillo2: 2,
// };

// let pockets = {
//     __proto__: bed,
//     money: 20000,
// };

// console.log(pockets.pen);
// console.log(bed.glasses);



// let animal = {
//     eat() {
//         this.full = true;
//     }
// };

// let rabbit = {
//     __proto__: animal,
// };

// rabbit.eat()
// console.log(rabbit.full)



// let hampster = {
//     stomach: [],

//     eat(food) {
//         this.stomach.push(food);
//     }
// };

// let speedy = {
//     __proto__: hampster,
//     stomach: [],
// };

// let lazy = {
//     __proto__: hampster,
//     stomach: [],
// };

// speedy.eat("apple");

// console.log(speedy.stomach);
// console.log(lazy.stomach);



function bind(obj, func) {
    obj.func = func;

    return obj.func();
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}.`);
}

const person1 = {name: "Loh", age: 83, job: "Taxi"};
const person2 = {name: "Dima", age: 22, job: "Programmist"};

bind(person1, logPerson);
bind(person2, logPerson);