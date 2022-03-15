// let calculator = {
//     read() {
//         this.a = +prompt("Введите первое число", 0);
//         this.b = +prompt("Введите второе число", 0);
//     },
//     sum() {
//          return this.a + this.b ;
//     },
//     mul() {
//         return this.a * this.b ;
//     }
//   };
  
function Calc(){
    this.read = function() {
        this.a = +prompt("Введите первое число", 0);
        this.b = +prompt("Введите второе число", 0);
    },
    this.sum = function() {
         return this.a + this.b ;
    },
    this.mul = function() {
        return this.a * this.b ;
    }
}

let calculator = new Calc;
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );