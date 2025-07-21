function getComputerChoice(){
    let rand_num = Math.random();
    if(rand_num<=0.33){
        return "rock";
    }
    else if(rand_num >0.66)
    {
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter your choice:");
    return choice;
}


function playGame(){
    //Game Variables
    let humanScore = 0;
    let computerScore = 0;

    //function to play 1 round
    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    let roundMessage = "";
    if(humanChoice === "rock")
    {
        if(computerChoice === "rock")
        {
            console.log("Draw! Rock and Rock");
        }
        else if(computerChoice === "paper")
        {
            console.log("You Lose! Paper beats Rock");
            computerScore++;
        }
        else if(computerChoice === "scissor")
        {
            console.log("You Win! Rock beats Scissor");
            humanScore++;
        }
    }
    else if(humanChoice === "paper")
    {
        if(computerChoice === "paper")
        {
            console.log("Draw! Paper and Paper");
        }
        else if(computerChoice === "scissor")
        {
            console.log("You Lose! Scissor beats Paper");
            computerScore++;
        }
        else if(computerChoice === "rock")
        {
            console.log("You Win! Scissor beats Rock");
            humanScore++;
        }
    }
    else if(humanChoice === "scissor")
    {
        if(computerChoice === "scissor")
        {
            console.log("Draw! Scissor and Scissor");
        }
        else if(computerChoice === "rock")
        {
            console.log("You Lose! Rock beats Scissor");
            computerScore++;
        }
        else if(computerChoice === "paper")
        {
            console.log("You Win! Scissor beats Paper");
            humanScore++;
        }
    }
    }

    for(let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();
