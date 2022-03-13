// let sayHi = function(){
//     alert("Hi");
// };

// let func = sayHi;
// func();

// function ask(question, yes, no){
//     if(confirm(question)){
//         yes();
//     }
//     else{
//         no();
//     }
// }


// function showYes(){
//     alert("YES");
// }

// function showNo() {
//     alert("NO");
// }

// ask("Yes or No?", showYes, showNo)

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();

    for     (let i = 0; i < 15  ; i++) 
    
    {
      console.log(i);
    }
  }
  
  ask(
    "Вы согласны?",
    () => { alert("Вы согласились."); },
    () => { alert("Вы отменили выполнение."); }
  );