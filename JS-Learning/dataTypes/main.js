"use strict";

// Numbers

function sumString(n1, n2) {
    return +n1 + +n2;
}

function readNumber() {
    let num;
    do {
        num = +prompt("Input number: ", 0)
    } while( !isFinite(num) );

    if (num === null || num === "") return null;

    return +num;
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInteger(min, max) {
    // return Math.round(Math.random() * (max - min) + min);---------------Минимальное и максимальное значение имеют меньшую вероятность генерации
    return Math.floor(Math.random() * (max + 1 - min) + min);
}



// Strings

function ucFirst(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);;
}

function checkSpam(str) {
    str = str.toLowerCase();
    return (str.includes("xxx") || str.includes("viagra"));
}

function truncate(str, maxLength) {
    let strLength = str.length;
    
    if (maxLength < strLength) {
        return str.slice(0, maxLength - 1) + "…";
    }

    return str;
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}



// Array

// let styles = ["Jazz", "Blus"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classic";
// alert(styles.shift());
// styles.unshift("Rap", "Reggy");
// console.log(styles);

function sumInput() {
    let sumArray = [];
    let num = prompt("Number: ", 0);
    while (isFinite(num) && !(num == "") && num != null) {
        sumArray.push(+num);
        num = prompt("Number: ", 0);
    }
    
    let sum = 0;

    for (let i of sumArray) {
        sum += i;
    }
    return sum;
}

function camelize(str) {
    let arr = str.split("-");

    arr = arr.map((item, index) => {
        if (index > 0) return (item[0].toUpperCase() + item.slice(1))
        else return item;
    });

    str = arr.join("");
    return str;
}

function filterRange(arr, a, b) {
    let result = [];

    arr.forEach(item => {
        if (item >= a && item <= b) result.push(item)
    });

    return result;
}

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];

        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

function sortLoss(arr) {
    arr.sort((a, b) => a -b);
}

function copySorted(arr) {
    return arr.slice().sort();
}
