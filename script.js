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