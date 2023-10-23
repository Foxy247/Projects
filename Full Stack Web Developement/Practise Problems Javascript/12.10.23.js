// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favHoliday = 'easter'
favHoliday = 'christmas'
favHoliAllCaps = favHoliday.toUpperCase()
// console.log(favHoliAllCaps);

//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let streamer = 'soursweet'
    // let subStreamer = streamer.substring(streamer.length-3)
    // alert(subStreamer)

    // console.log(streamer.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function takes5nums(n1,n2,n3,n4,n5){
    let result = 100 - n1 - n2 - n3 - n4 - n5
    console.log(Math.abs(result))
}
takes5nums(20,23,24,22,24)

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function takes3(n1,n2,n3){
   lowestValue = Math.min(n1,n2,n3)
   highestValue = Math.max(n1,n2,n3) 
}
takes3(2,6,3)
console.log(highestValue)
console.log(lowestValue)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headOrTails(){
    let result = Math.random()
    if(result < .5){
        return 'heads'
    } else {
        return 'tails'
    }
}
console.log(headOrTails())

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
    