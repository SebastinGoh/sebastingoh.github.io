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

function singleRound() {
    let computerSelection = getComputerChoice();

    // make player selection only start with uppercase
    let playerSelection = prompt("What is your choice?");
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    // initialise variable with result of the round if someone won
    let message;

    // initialise player winning conditions
    let playerWins = ["Rock Scissors","Scissors Paper","Paper Rock"];

    //initialise result of round
    let result;

    // check if there is a draw
    if (computerSelection == playerSelection) {
        // set result to 'Draw'
        result = "Draw!";
        // format message as draw with no winner
        message = `It's a ${result} Both picked ${computerSelection}`;
    } else {
        // initialise round outcome
        let outcome = `${playerSelection} ${computerSelection}`;
        
        // check if player won (3 combinations: R>S, S>P, P>R)
        if (playerWins.includes(outcome)) {
            // set result to "Win!" 
            result = "Win!";
        } else {
            // else set result to "Lose!"
            result = "Lose!";
        }
            
        // format message with round winner
        // switch statement checking value of result
        switch(result) {
            case("Win!"):
                // Format message with player as winner
                message = `You ${result} ${playerSelection} beats ${computerSelection}`;
                break
            case("Lose!"):
                // Format message with computer as winner
                message = `You ${result} ${computerSelection} beats ${playerSelection}`;
                break   
        }
    }

    return {
        'message': message,
        'result' : result
    };
}

function game() {
    // initialise computer and player scores
    let computerScore = 0;
    let playerScore = 0;

    // initialise round counter
    let roundCounter = 1;

    // loop through while counter less than 6
    while (roundCounter < 6) {
        // initialise the result of a round
        let roundResult = singleRound();
        // log round result message in console
        console.log(roundResult.message);
        
        // switch statment to check whose score to increase
        switch(roundResult.result) {
            case "Lose!":
            // increment computer score
                computerScore++;
                break
            case "Win!":
            // increment player score
                playerScore++;
                break
            // do nothing cause of draw
        }

        //increment counter
        roundCounter++;
    }

    // log final scores
    let finalScore = `Computer score: ${computerScore}, Player score: ${playerScore}`;
    console.log(finalScore)
}

game()