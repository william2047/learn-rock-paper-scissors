let player2Points = 0;
let player1Points = 0;

const resText = document.querySelector("#text p");
const player1Score = document.querySelector("#text  #score #player1");
const player2Score = document.querySelector("#text  #score #player2");

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

function playRound(player1Selection, player2Selection){ //rock paper scissor round
    player1Selection


    let winState = 0;
    if(player1Selection == player2Selection); //checks if both picks are equal (skips steps)
    else if(((player1Selection == 0) ? 2 : player1Selection-1) == player2Selection) winState ++;
    else winState --;

    switch(winState){
        case 0: return "It's a Tie!"; break; //tie text
        case 1: player1Points ++; return "You Win! " + pick[player1Selection] + " beats " + pick[player2Selection]; break; //player win text
        case -1: player2Points ++; return "You Loose! " + pick[player2Selection] + " beats " + pick[player1Selection]; break; //player loose text
        default: return "ERROR somewhere, i dont know; winstate not valide value" //console log for if state is unexpected value
    }
}

function scoreLabeUpdate(){
    player1Score.textContent = player1Points;
    player2Score.textContent = player2Points;
}

const pickButtons = document.querySelectorAll("#buttons button");
pickButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if(player1Points == 5 || player2Points  == 5){
            player1Points = 0;
            player2Points = 0;
        }
        let textMsg = playRound(stringPickTranslator(button.getAttribute("data-pick")), computerPlay());
        if(player1Points == 5) resText.textContent = "Congratulations, you win the 5 round Tournament!";
        else if(player2Points == 5) resText.textContent = "Ahh, you lost the 5 round tournament, try again!";
        else resText.textContent = textMsg;

        scoreLabeUpdate();
    })

});