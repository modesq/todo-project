let username = prompt("enter your name")

let gender = prompt("enter your gender (male(M) or female(F)")

let age = prompt('enter your age')
if (age <= 0) {
    alert("age is less than or equal to zero")
}

let confirmation = confirm("confirm if you want to skip the welcoming message");

if (confirmation == 0) {
    if (gender === "female" || gender.toLowerCase === "f") {
        alert("Welcome to this webpage, Ms. " + username)
    }
    else if (gender === "male" || gender === "m") {
        alert("Welcome to this webpage, Mr. " + username);
    }
    else {
        alert("Welcome to this webpage, " + username);
    }
}

let confirmation01 = confirm("do you like starwars?");

let confirmation02 = confirm("do you listen to music?");

let confirmation03 = confirm("are you a fan of videogames?");