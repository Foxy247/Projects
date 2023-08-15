let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  //Rendered score (DOM)
  updateScoreElement();

  /*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  };
}
 */

  let isAutoPlaying = false; //keeps track of wether we play or not
  let intervalId; 

  function autoPlay(){
    if (!isAutoPlaying) {
      intervalId = setInterval(function() {
        const playerMove = pickComputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false; 
    }
  }

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    result = "";
    
    //Player Move
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You lose";
      } else if (computerMove === "paper") {
        result = "You win";
      } else if (computerMove === "scissors") {
        result = "Tie";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You win";
      } else if (computerMove === "paper") {
        result = "Tie";
      } else if (computerMove === "scissors") {
        result = "You lose";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie";
      } else if (computerMove === "paper") {
        result = "You lose";
      } else if (computerMove === "scissors") {
        result = "You win";
      }
    }

    // update Score
    if (result === "You win") {
      score.wins += 1;
    } else if (result === "You lose") {
      score.losses += 1;
    } else if (result === "Tie") {
      score.ties += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    //display result
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;

    //insert the moves onto the page

    document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer` 
  }

  function updateScoreElement(){
    document.querySelector('.js-score')
      .innerHTML = ` Wins: ${score.wins}, Losses ${score["losses"]}, Ties ${score.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock"; // computer randomly selects a move
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }

    return computerMove;
  }