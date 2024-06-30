// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
    const sentence = 'Hello everyone, Sour Here?'
    // alert(sentence.endsWith('?'))

//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
    let intro = 'Hey my name is Emanuel, I am a jr. dev'
    let newIntro = intro.replace('jr. dev','software engineer')
    // console.log(newIntro);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
    function rockPaperScissors(){
        let random = Math.random()
        if(random < 0.33){
            return 'rock'
        } else if(random < 0.66){
            return 'paper'
        } else {
            return 'scissors'
        }
    }
// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
    function determineWin(playerPick){
        let botPick = rockPaperScissors()
        
        if(
        playerPick === 'rock' && botPick === 'scissors' || 
        playerPick === 'paper' && botPick === 'rock' || 
        playerPick === 'scissors' && botPick === 'paper'
        ){
            console.log('you win'); 
        } else if(
            playerPick === botPick
        ){
            console.log('you tie');
        } else {
            console.log('you lose');
        }
    }

    determineWin('paper')
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.


