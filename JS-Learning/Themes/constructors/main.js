function Calculator() {
    this.read = function() {
        this.a = +prompt("a? ", "");
        this.b = +prompt("b? ", "");
    };
    this.sum = function() {
        return this.a + this.b;
    }
    this.mul = function() {
        return this.a * this.b;
    }
}

function Accamulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt("Сколько прибавить?", "");
    }
}