//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function StreetFighterFactory(punch,kick,taunt,specialMove){
    this.punch = punch 
    this.kick = kick
    this.catchPhrase = catchPhrase
    this.specialMove = specialMove
    this.taunt = function (){
        console.log('fight');
    }
    this.dodge = function dodge(){
        console.log('dodge');
    }
    this.counter(){
        console.log('counter');
    }
} 

