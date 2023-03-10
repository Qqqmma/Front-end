"use strict";

function printNumbers(from, to) {
    let curent = from;

    let timerId = setInterval(() => {
        console.log(curent); 
        if (curent == to) {
            clearInterval(timerId);
        }
        curent++;
    }, 1000);
}

printNumbers(1, 6);