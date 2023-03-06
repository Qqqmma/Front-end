// Arrays exercises

function camelize(str) {
    return str.split("-").map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)).join('');
}

function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
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

function sortInLoss(arr) {
    return arr.sort((a, b) => b - a);
}

function copySorted(arr) {
    return arr.slice().sort();
}

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    }
    this.calculate = function(str) {
        let split = str.split(" "),
            a = +split[0],
            op = split[1],
            b = +split[2];
        if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
        return this.methods[op](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

function sortByAge(arr) {
    return arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

function bedShaffle(arr) {
    arr.sort((a, b) => Math.random() - 0.5);
}

function shaffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

function getAverageAge(users) {
    return (users.reduce((averageAge, user) => averageAge + user.age, 0)) / users.length;
}

function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)){
            result.push(str);
        }
    }
    return result;
}

function groupById(arr) {
    return arr.reduce((obj, item) => {
        obj[item[id]] = item;
        return obj;
    }, {});
}




// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(user => user.name);



// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));







// MAP/SET exercises

function unique(arr) {
    return Array.from(new Set(arr));
}

function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }

    return Array.from(map.values());
}
  
// let str = "jopa";
// alert(str.split("").sort().join(""))
// alert(str)

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
aclean(arr)