let pick = ["Rock", "Paper", "Scissor"]; //array to map value 0,1,2 to rock, paper, scissor

function stringPickTranslator(inp){ //converts rock, paper, scissor to  number 0,1,2
    inp = inp.toUpperCase();

    switch(inp){
        case "ROCK": return 0; break;
        case "PAPER": return 1; break;
        case "SCISSOR": return 2; break;
        default: return console.log("ERROR: invalid input :()")
    }
}

function computerPlay(){ //generate random number for computer
    return Math.floor(Math.random() * (3 - 0));
}

function playRound(playerSelection, computerSelection){ //rock paper scissor round

    let winState = 0;
    if(playerSelection == computerSelection); //checks if both picks are equal (skips steps)
    else if(((playerSelection == 0) ? 2 : playerSelection-1) == computerSelection) winState ++;
    else winState --;

    switch(winState){
        case 0: return console.log("It's a Tie!"); break; //tie text
        case 1: return console.log("You Win! " + pick[playerSelection] + " beats " + pick[computerSelection]); break; //player win text
        case -1: return console.log("You Loose! " + pick[computerSelection] + " beats " + pick[playerSelection]); break; //player loose text
        default: return console.log("ERROR somewhere, i dont know; winstate not valide value") //console log for if state is unexpected value
    }
    return null;
}

function game(){ //5 round game
    for(let i=0; i<5; i++){
        playRound(stringPickTranslator(window.prompt("Enter Rock Paper Or Scissor!")), computerPlay());
    }
}