// Stone << Paper
// Paper >> Scissor
// Scissor << Stone


    let userChoice = 3;
let computerChoice =Math.floor(Math.random()*3);
console.log(computerChoice);
if(computerChoice === 1 && userChoice === 2) {
    console.log("You Win");
} else if(computerChoice === 2 && userChoice === 3) {
    console.log("You Win");}
    else if(computerChoice === 3 && userChoice === 1) {
        console.log("You Win");
    }
    else if(computerChoice === userChoice&& computerChoice===0){
        console.log("Draw");
    }   
    else{
        console.log("You Lose");
    }
