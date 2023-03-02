'use strict';

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
};
let sum = sumInObj(salaries);
let user = {};
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";

delete user.name;

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}
function sumInObj(obj) {
    let sum = 0;
    for (prop in obj) {
        sum = sum + obj[prop];
    }
    return sum;
}
function multiplyNumberic(obj) {
    for (let prop in obj) {
        if (typeof(obj[prop]) === 'number') {
            obj[prop] *= 2;
        } else {continue}
    }
}
multiplyNumberic(menu)
for (let i in menu) {
    alert(menu[i])
}