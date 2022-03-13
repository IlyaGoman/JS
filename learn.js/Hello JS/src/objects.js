let user = {
    name: "Ilya",
    age: 36
}
alert(user.name);

user.isAdmin = true;

alert(user.isAdmin);

for (const key in user) {
    if (Object.hasOwnProperty.call(user, key)) {
        alert(`Property ${key} : ${user[key]}`);        
    }
}

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
    let cnt = 0;
    for (const key in obj) {
        return false;
    }

    return true;
}