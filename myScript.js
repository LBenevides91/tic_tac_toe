function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    if (computerChoice == 1){
        return 'Paper';

    } else if (computerChoice == 2){
        return 'Scissors';

    } else {
        return 'Rock';
    }
}


function ticTacToeRound(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ( playerSelection == 'rock' && computerSelection == 'scissors' ) {
        return 'You win! Rock beats Scissors';

    } else if ( playerSelection == 'scissors' && computerSelection == 'paper' ){
        return 'You win! Scissors beats Paper';

    } else if ( playerSelection == 'paper' && computerSelection == 'rock' ){
        return 'You win! Paper beats Rock';

    } if( computerSelection == 'rock' && playerSelection == 'scissors' ) {
        return 'You lose! Rock beats Scissors';

    } else if ( computerSelection == 'scissors' && playerSelection == 'paper' ){
        return 'You lose! Scissors beats Paper';

    } else if ( computerSelection == 'paper' && playerSelection == 'rock' ){
        return 'You lose! Paper beats Rock';

    } else {
        return 'Draw!!!';

    }
}

function game(){

    let player = '';
    let computer = '';
    let playerScore = 0;
    let computerScore = 0;
    let gameCount = 0;

    for (let i = 0; i < 6; i++){

        player = prompt("Type the player's choice");
        computer = getComputerChoice();
        alert(ticTacToeRound(player, computer));
        gameCount =  gameScore(player, computer);

        if (gameCount == 1){
            playerScore++;

        } else if (gameCount == 2){
            computerScore++;
        } else {
            playerScore++;
            computerScore++;
        }
    }
    
    if (playerScore > computerScore){
        alert ('Player Wins!!!');

    } else if (computerScore > playerScore){
        alert ('Computer Wins!!!')     

    } else {
        alert ('It\'s a tie!');
    }
}

function gameScore(playerSelection, computerSelection){

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if ( playerSelection == 'rock' && computerSelection == 'scissors' ) {
        return 1;

    } else if ( playerSelection == 'scissors' && computerSelection == 'paper' ){
        return 1;

    } else if ( playerSelection == 'paper' && computerSelection == 'rock' ){
        return 1;

    } if( computerSelection == 'rock' && playerSelection == 'scissors' ) {
        return 2;

    } else if ( computerSelection == 'scissors' && playerSelection == 'paper' ){
        return 2;

    } else if ( computerSelection == 'paper' && playerSelection == 'rock' ){
        return 2;

    } else {
        return 0;

    }
}

game();
