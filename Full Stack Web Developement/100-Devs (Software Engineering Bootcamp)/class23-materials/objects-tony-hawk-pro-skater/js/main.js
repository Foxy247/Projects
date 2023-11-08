//Create a Tony Hawk Pro Skater constructor that makes skating game characters with 4 properties and 3 methods

function MakeSkaterCharacter (charName,skill,hight) {
    this.name = charName
    this.skill = skill 
    this.hight = hight
    this.start = () => console.log('start');
    this.stop = () => console.log('stop');
    this.jump = () => console.log('jump');
} 

let kareemCampbell = new MakeSkaterCharacter('')

function Factory (vehicle,ability){
    this.vehicle = vehicle
    this.minerals = minerals
    this.gas = gas
    this.supply = supply
    this.hitpoints = hitpoints
    this.range = range
    this.move 
    this.stop 
    this.holdPosition
    this.attackMove
    this.specialAbility = () => console.log(`${}`); 
}

let siegeTank = new Factory ('siegeTank', 150, 125, 3, 175)