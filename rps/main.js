function initialiseGame() {
    // initialise computer and player scores
    let computerScore = 0;
    let playerScore = 0;

    // initialise round counter
    let roundCounter = 1;

    // display scores and round counter to html
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("roundCounter").innerHTML = roundCounter;
}

function getComputerChoice() {
    // initialise random variable 'prob' that is either 0, 1 or 2
    let prob = Math.floor(Math.random() * 3);
    
    // initialise computer choice
    let choice;

    // check for the value of 'prob' to decide value of computer choice
    switch(prob) {
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        default:
            choice = "Scissors";
    }
    return choice;
}

function singleRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result;
    let message;

    // initialise player winning conditions (3 combinations: R>S, S>P, P>R)
    let playerWins = ["Rock Scissors","Scissors Paper","Paper Rock"];

    if (computerSelection == playerSelection) {
        result = "Draw";
        message = `It's a ${result}! Both picked ${computerSelection}`;
    } else {
        // put player and computer choices as text to check
        let outcome = `${playerSelection} ${computerSelection}`;
        // check if player won if text is found in player winning combinations
        if (playerWins.includes(outcome)) {
            result = "Win";
        } else {
            result = "Lose";
        }
            
        // checking value of result to format message
        switch(result) {
            case("Win"):
                message = `You ${result}! ${playerSelection} beats ${computerSelection}`;
                break
            case("Lose"):
                message = `You ${result}! ${computerSelection} beats ${playerSelection}`;
                break   
        }
    }

    return {
        'message': message,
        'result' : result
    };
}

function startRound(playerChoice) {
    
    // take scores and round counter from html
    let computerScore = document.getElementById("computerScore").innerHTML;
    let playerScore = document.getElementById("playerScore").innerHTML;
    let roundCounter = document.getElementById("roundCounter").innerHTML;
    
    let roundResult = singleRound(playerChoice);
    
    // switch statment to check whose score to increase
    switch(roundResult.result) {
        case "Lose":
            computerScore++;
            break
        case "Win":
            playerScore++;
            break
        // do nothing cause of draw
    }

    roundCounter++;

    // display scores and round counter to html
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("roundCounter").innerHTML = roundCounter;
    document.getElementById("message").innerHTML = roundResult.message;

    // end game when anyone's score equals 5
    if (computerScore == 5 || playerScore == 5) {
        if (playerScore > computerScore) {
            document.getElementById("message").innerHTML = "Player Wins";
        } else {
            document.getElementById("message").innerHTML = "Computer Wins";
        }
        // toggle options
        toggleOptions();
    } 
}

function resetGame() {
    initialiseGame();

    // toggle options
    toggleOptions();
}

function toggleOptions() {
    // toggle player options
    document.getElementById("Rock").parentNode.classList.toggle("hidden");
    document.getElementById("Paper").parentNode.classList.toggle("hidden");
    document.getElementById("Scissors").parentNode.classList.toggle("hidden");

    // toggle reset button
    document.getElementById("reset").parentNode.classList.toggle("hidden");
}

// initialise scores and round counter
initialiseGame();