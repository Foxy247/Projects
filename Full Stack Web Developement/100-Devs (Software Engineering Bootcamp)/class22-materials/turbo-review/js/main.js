// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
    let favDrink = ' cola '
    favDrink = favDrink.trim()
    // console.log(favDrink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
    let words = 'Hey everyone, Sour here. I like apples'
    if(words.search('apples') !== -1){
        console.log('yes')
    } else {
        console.log('no')
    }
    

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
    function rockPaperScissors (){
        let randomNumber = Math.random()
        if(randomNumber < 1/3){
            return 'rock'
        } else if (randomNumber < 2/3){
            return 'paper'
        } else {
            return 'scissors'
        }
    }
    // console.log(rockPaperScissors());

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if the player won a game of rock paper scissors against a bot using the above function
    function rockPaperScissors2 (playerChoice){
        let botChoice = rockPaperScissors()
        if(
            (playerChoice === 'rock')
        ){

        }
    }
    console.log(bot)
//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
    // function rockPaperScissors3 (){
        
    // }


// procedual example
    let baseSalary = 30_000;
    let overtime = 10; 
    let rate = 20;

    function getWage(baseSalary, overtime, rate) {
        return baseSalary + (overTime * rate);
    }

// OOP example
let employee = {
     
}