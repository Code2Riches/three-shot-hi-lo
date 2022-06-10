const prompt = require('prompt-sync')({sigint: true});

let answer = Math.ceil(Math.random() * 100);
let guess = Number(prompt("I'm thinking of a number bewtween 1 and 100. Try to guess it: "));
let count = 0;

while (count < 2 && guess !== answer) {
    count++;
    if (guess < answer){
        console.log("Too low, guess again!: ");
        guess = Number(prompt(" > "));
    }   else if (guess > answer) {
        console.log("Too high, guess again!: ");
        guess = Number(prompt(" > "));
    }
}

if (count === 2) {
    console.log("Out of chances. I was thinking of: " + answer);
}
if(guess === answer) {
    console.log("Congrats!: " + answer);
}

