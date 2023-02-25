function getComputerChoice(){
    let choice = "";
    let randomNumber = Math.floor(Math.random(0)*3);
    
    switch(randomNumber){
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissor";
            break;
    }
    return choice;
};

function playGame(playerSelection, computerSelection){
    playerSelection = prompt("What's your choice? rock, paper, or, scissor : ").toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection == computerSelection){
        alert(`${computerSelection} can't beat ${playerSelection}. It's a tie.`);   
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        alert(`${computerSelection} beats ${playerSelection}. Computer Wins.`);
    }
    else if (playerSelection == "paper" && computerSelection == "scissor"){
        alert(`${computerSelection} beats ${playerSelection}. Computer Wins.`);
    }
    else if (playerSelection == "scissor" && computerSelection == "rock"){
        alert(`${computerSelection} beats ${playerSelection}. Computer Wins.`);
    }
    else{
        alert(`${computerSelection} beats ${playerSelection}. Computer Wins.`);
    };
};