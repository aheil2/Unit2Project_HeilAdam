var playerScore = 0;
var computerScore = 0;
$(document).ready(function () {
    $("#tabs a").click(showTab);
    $("#gameBoard img").click(playGame);
    $("#playerScore").text(playerScore);
    $("#computerScore").text(computerScore);
    var playerChoice;
    var computerChoice;

    function showTab(event) {
        event.preventDefault();
        $(this).tab("show");
    }

    $(".container").validate(
        {
            submitHandler: playGame
        }
    );

    function playGame () {
        playerChoice = parseFloat($(this).attr(`id`));
        var loc = $(this).attr(`src`);
        $("#player").attr(`src`, loc);

        computerChoice = Math.floor((Math.random() * 5) + 1);
        $("#computer").attr(`src`, `${computerChoice}.png`);

        if (playerChoice === 1) {
            if (computerChoice === 1) {
                $("#roundOutput").text(`TIE!`);
            }
            else if (computerChoice === 2) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
            else if (computerChoice === 3) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
            else if (computerChoice === 4) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
            else if (computerChoice === 5) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
        }
        else if (playerChoice === 2) {
            if (computerChoice === 1) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
            else if (computerChoice === 2) {
                $("#roundOutput").text(`TIE!`);
            }
            else if (computerChoice === 3) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
            else if (computerChoice === 4) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
            else if (computerChoice === 5) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
        }
        else if (playerChoice === 3) {
            if (computerChoice === 1) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
            else if (computerChoice === 2) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
            else if (computerChoice === 3) {
                $("#roundOutput").text(`TIE!`);
            }
            else if (computerChoice === 4) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
            else if (computerChoice === 5) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
        }
        else if (playerChoice === 4) {
            if (computerChoice === 1) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
            else if (computerChoice === 2) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
            else if (computerChoice === 3) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
            else if (computerChoice === 4) {
                $("#roundOutput").text(`TIE!`);
            }
            else if (computerChoice === 5) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
        }
        else if (playerChoice === 5) {
            if (computerChoice === 1) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
            else if (computerChoice === 2) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
            else if (computerChoice === 3) {
                $("#roundOutput").text(`You win the round!`);
                playerScore++;
                $("#playerScore").text(playerScore);
            }
            else if (computerChoice === 4) {
                $("#roundOutput").text(`You lose the round!`);
                computerScore++;
                $("#computerScore").text(computerScore);
            }
            else if (computerChoice === 5) {
                $("#roundOutput").text(`TIE!`);
            }
        }

        if (playerScore >= 3) {
            alert(`You are victorious!`);
            window.location.reload();
        }
        else if (computerScore >= 3) {
            alert(`You have been defeated!`);
            window.location.reload();
        }

    }
});