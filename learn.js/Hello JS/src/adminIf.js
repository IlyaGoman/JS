let userName = prompt("Input userName?");

if (userName === "Admin") {
    let userPassword = prompt("Input password");
    if (userPassword === "AdminPass") {
        alert("Hello, Admin!");
    } else if(userPassword !== null && userPassword !== ""){
        alert("Incorrect password");
    }
    else{
        alert("Canceled!");
    }
} else if (userName !== null && userName !== "") {
    alert("Incorrect user name");
}
else{
    alert("Canceled!");
}

alert(3 - "10");