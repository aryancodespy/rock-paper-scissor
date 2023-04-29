function getComputerChoice(){
    let choice = "";
    let randomNumber = Math.floor(Math.random(0)*12);
    
    switch(randomNumber){
        case 0:
        case 1:
        case 2:
        case 3:
            choice = "rock";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            choice = "paper";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
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
container.style.cssText = "display: flex; flex-direction: column;";

// Add container to the body element
body.append(container)

//Rock Button
const rock = document.createElement("button");
rock.setAttribute("id", "rock");
rock.textContent = "ROCK";
rock.style.cssText = "border-radius: 50px; padding: 8px; width: 200px; margin: 20px auto";

//Paper Button
const paper = document.createElement("button");
paper.setAttribute("id", "paper");
paper.textContent = "PAPER";
paper.style.cssText = "border-radius: 50px; padding: 8px; width: 200px; margin: 20px auto";

//Scissors Button
const scissor = document.createElement("button");
scissor.setAttribute("id", "scissor");
scissor.textContent = "Scissor";
scissor.style.cssText = "border-radius: 50px; padding: 8px; width: 200px; margin: 20px auto";


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