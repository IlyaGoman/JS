let salaries = {
    'Jonh': 100,
    'Pete': 300,
    "Mary": 250,
};

function topSalary(salaries) {
    let max = 0;
    let name = null;

    for (const [key,value] of Object.entries(salaries)) {
        if (value >= max) {
            max = value;
            name = key;
        }
    }
    return name;
}

alert(topSalary(salaries));

let json = JSON.stringify(salaries);

alert( json );

let arr = ["I", "learn", "JS"]
alert( arr.splice(1,1)) ; //["I", "JS"]
alert( arr );