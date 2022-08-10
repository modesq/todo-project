let username = prompt("enter your name")

let gender = prompt("enter your gender (male(M) or female(F)")

let age = prompt('enter your age')
if (age <= 0) {
    alert("age is less than or equal to zero")
}

let confirmation = confirm("confirm if you want to skip the welcoming message");

if (confirmation == 0) {
    if (gender === "female") {
        alert("Welcome to this webpage, Ms. " + username)
    }
    else if (gender === "male") {
        alert("Welcome to this webpage, Mr. " + username);
    }
    else {
        alert("Welcome to this webpage, " + username);
    }
}

let answers = []; 

let confirmation01 = confirm("do you like starwars?");
let confirmation02 = confirm("do you listen to music?");
let confirmation03 = confirm("are you a fan of videogames?");

answers.push(confirmation01, confirmation02, confirmation03);
console.log(answers);