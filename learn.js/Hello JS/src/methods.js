// user = {
//     name: "Ilya",
//     age: 36
// };

// user.sayHi = function () {
//     alert( "Hi" );

// user = {
//     name: "Ilya",
//     age: 36,
//     sayHi() {
//         alert(this.name);
//     }
// };

// user.sayHi();


let user = {
    firstName: "Илья",
    sayHi() { let arrow = () => alert(this.firstName);
        arrow();
    }
  };
  
  user.sayHi(); // Илья