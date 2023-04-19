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
        alert(`${computerSelection.toUpperCase()} can't beat ${playerSelection.toUpperCase()}. It's a tie.`);
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        alert(`${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}. Computer Wins.`);
    }
    else if (playerSelection == "paper" && computerSelection == "scissor"){
        alert(`${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}. Computer Wins.`);
    }
    else if (playerSelection == "scissor" && computerSelection == "rock"){
        alert(`${computerSelection.toUpperCase()} beats ${playerSelection.toUpperCase()}. Computer Wins.`);
    }
    else{
        alert(`${playerSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}. Player Wins.`);
    };
};

// Access body element
const body = document.body;

// Game body
const container = document.createElement("div");
container.classList.add("container");

// Add container to the body element
body.append(container)

// Game Button
const playRound = document.createElement("button");
playRound.setAttribute('id', 'startGame');
playRound.textContent = "Play Game";
playRound.style.cssText = "border-radius: 50px; padding: 8px; width: 200px;";

// Add button to the container
container.append(playRound);

// Calling playGame function when button is clicked
const btn = document.querySelector("#startGame");
btn.onclick = playGame;