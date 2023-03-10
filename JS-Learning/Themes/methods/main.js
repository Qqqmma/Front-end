let calculator = {
    read() {
        this.number1 = +prompt("Введите первое число: ", "");
        this.number2 = +prompt("Введите второе число: ", "");
    },
    sum() {
        return this.number1 + this.number2;
    },
    mul() {
        return this.number1 * this.number2;
    }
};

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // показывает текущую ступеньку
      alert( this.step );
      return this;
    }
};