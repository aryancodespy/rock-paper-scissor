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

//Player Choice Rock
function choiceRock(playerSelection, computerSelection){
    playerSelection = "rock";
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

//Player Choice Paper
function choicePaper(playerSelection, computerSelection){
    playerSelection = "paper";
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

//Player Choice Scissor
function choiceScissor(playerSelection, computerSelection){
    playerSelection = "scissor";
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
container.style.cssText = "display: flex; flex-direction: column; width:100%";;

// Add container to the body element
body.append(container)

//score board
const board = document.createElement("div");
board.classList.add("scoreboard");
board.style.cssText = "border: 2px solid; border-radius: 10px; width: 80%; max-width: 500px; height: 300px; margin: auto;";

//Add board inside container
container.appendChild(board);

//Player Score
const playerScore = document.createElement("p");
playerScore.setAttribute('id', 'playerScore');
playerScore.textContent = "Player: "
playerScore.style.cssText = "margin: 50px 25px";

const spanPlayer = document.createElement("span");
spanPlayer.setAttribute('id','playerPoint');

playerScore.append(spanPlayer);
board.append(playerScore)

//Computer Score
const computerScore = document.createElement("p");
computerScore.setAttribute('id', 'computerScore');
computerScore.textContent = "Computer: "
computerScore.style.cssText = "margin: 50px 25px";

const spanComputer = document.createElement("span");
spanComputer.setAttribute('id','computerPoint');

computerScore.append(spanComputer);
board.append(computerScore)

//Rock Button
const rock = document.createElement("button");
rock.setAttribute("id", "rock");
rock.textContent = "ROCK";
rock.style.cssText = "border-radius: 50px; padding: 8px; width: 200px; margin: 20px auto; border: solid black; background-color: gray; color:white; font-weight: 800";

//Paper Button
const paper = document.createElement("button");
paper.setAttribute("id", "paper");
paper.textContent = "PAPER";
paper.style.cssText = "border-radius: 50px; padding: 8px; width: 200px; margin: 20px auto; border: solid black; background-color: gray; color:white; font-weight: 800";

//Scissors Button
const scissor = document.createElement("button");
scissor.setAttribute("id", "scissor");
scissor.textContent = "Scissor";
scissor.style.cssText = "border-radius: 50px; padding: 8px; width: 200px; margin: 20px auto; border: solid black; background-color: gray; color:white; font-weight: 800";


// Add buttons to the container
container.append(rock);
container.append(paper);
container.append(scissor);

// Calling playGame function when button is clicked
const rockbtn = document.querySelector("#rock");
rockbtn.onclick = choiceRock;

const paperbtn = document.querySelector("#paper");
paperbtn.onclick = choicePaper;

const scissorbtn = document.querySelector("#scissor");
scissorbtn.onclick = choiceScissor;