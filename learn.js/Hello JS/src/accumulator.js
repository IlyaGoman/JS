function Accumulator(startingValue) {
    this.sValue = startingValue,
    this.read = function(){
        this.sValue += +prompt("Введите число", 0);
    }
}


let accumulator = new Accumulator(1); // начальное значение 1

accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению

alert(accumulator.sValue);