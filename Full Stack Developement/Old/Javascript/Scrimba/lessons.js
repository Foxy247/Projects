


function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}


// Setting up the the race 🏎 🏎 🏎

countdown ()
// GO! 🏁
// Players are running the race 🏎 💨
// Race is finished! 🍾

// Get ready for a new race 🏎 🏎 🏎

countdown ()


// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function

function myLogger() {
    console.log(42)
}

myLogger()

let lap1 = 34
let lap2 = 33
let lap3 = 36

// Create a function that logs out the sum of all the lap times

function logLapTime() {
    // let laptotal = lap1+lap2+lap3
    console.log(lap1+lap2+lap3)
}
logLapTime()

------------

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function incrementlap () {
    lapsCompleted = lapsCompleted + 1
}

incrementlap ()
incrementlap ()
incrementlap ()

console.log(lapsCompleted)


-----------------------------------------------------------------------

// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count




let count = 0

function increment() {
    count = count + 1
    console.log(count)
}

-----------------------------------------------------------------------

// grab the count-el element, store it in a countEl variable
let countEl = document.getElementById("count-el")
console.log(countEl)
let count = 0

function increment() {
    count = count + 1
    // set countEl's innerText to the count
    countEl.innerText = count
}

-----------------------------------------------------------------------

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
    console.log(count)
}
-----------------------------------------------------------------------

let username = "per"
let message = "You have tree new notifications"

let messageToUser = message + ", " + username + "!"

console.log(messageToUser)

// Create a variable, messageToUser, that contains the message we have logged

-----------------------------------------------------------------------

// Create two variables, name and greeting. The name variable should store your name,
// and the greeting should store e.g. "Hi, my name is "

// Create a third variable, myGreeting, that contatenates the two strings
// Log myGreeting to the console

let name = "Emanuel"
let greeting = "Hi, my name is "

let myGreeting = (greeting + name)

console.log(myGreeting)
 