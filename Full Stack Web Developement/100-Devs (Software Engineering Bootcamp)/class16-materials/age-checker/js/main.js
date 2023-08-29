//Create a conditonal that checks their age
let age = 17;

//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
function ageChecker(){
    if (age < 16){
        console.log('You can not drive');
    } else if (age < 18){
        console.log('they can\'t hate from outside the club, because they can\'t even get in');
    } else if (age < 21){
        console.log('You can not drink');
    }    
    
}

//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph
document.querySelector('h1') 
    .addEventListener('click', ageChecker)

const inputElement = document.querySelector('#danceDanceRevolution')

// document.querySelector('p') = 