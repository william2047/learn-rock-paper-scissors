let pick = ["Rock", "Paper", "Scissor"];

function computerPlay(){
    return Math.floor(Math.random() * (3 - 0));
}

function rockPaperScissorRound(playerSelection, computerSelection){
    let winState = 0;
    if(playerSelection == computerSelection); //checks if both picks are equal (skips steps)
    else if(((playerSelection == 0) ? 2 : playerSelection-1) == computerSelection) winState ++;
    else winState --;

    switch(winState){
        case 0: return console.log("It's a Tie!"); break;
        case 1: return console.log("You Win! " + pick[playerSelection] + " beats " + pick[computerSelection]); break;
        case -1: return console.log("You Loose! " + pick[computerSelection] + " beats " + pick[playerSelection]); break;
    }
    return nulll;
}

rockPaperScissorRound(1,2);