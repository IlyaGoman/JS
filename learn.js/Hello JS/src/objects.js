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

alert("Copy object");

let iAm = {
    name: "ILya",
    age: 36,
    size: {
        height: 176,
        weight: 69
    }
}

let you = {};

for (const key in iAm) {
    if (typeof(iAm[key]) == "object") {
           you[key] = Object.assign({}, iAm[key]);     
    }
    else{
        you[key] = iAm[key];
    }
}

you.size.weight = 179;

alert(iAm.size.weight);
alert(you.size.weight);