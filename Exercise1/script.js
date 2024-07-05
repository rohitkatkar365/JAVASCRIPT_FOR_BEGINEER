// Function to get computer's choice
function getComputerChoice() {
    const choices = ['S', 'W', 'G'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    if ((playerChoice === 'S' && computerChoice === 'W') ||
        (playerChoice === 'W' && computerChoice === 'G') ||
        (playerChoice === 'G' && computerChoice === 'S')) {
        return "You win!";
    }
    return "You lose!";
}

// Main game function
function playGame() {
    const playerChoice = prompt("Enter S for Snake, W for Water, or G for Gun:").toUpperCase();

    if (!['S', 'W', 'G'].includes(playerChoice)) {
        alert("Invalid input! Please enter S, W, or G.");
        return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    alert(`You chose: ${playerChoice}\nComputer chose: ${computerChoice}\nResult: ${result}`);
}

// Start the game
if (confirm("Do you want to play Snake, Water, Gun?")) {
    playGame();
}
