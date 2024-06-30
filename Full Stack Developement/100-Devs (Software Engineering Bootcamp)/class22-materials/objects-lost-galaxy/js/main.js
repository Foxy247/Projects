//Create a mouse object that has four properties and three methods

    // let mouse = {
    //     form: 'round'
    //     color: 'black'
    //     brand: 'glorious'
    //     buttons: 5
    //     function click(){
    //         console.log('clicking');
    //     }
    //     function run(){
    //         console.log();
    //     }
    //     function scroll(){
    //         console.log();
    //     }
    // }

    let mouse = {}

    mouse.form = 'round'
    mouse.color = 'black'
    mouse.click = function(){console.log('click');}

    function MakeCar(carMake,carModel,carColor,numOfDoors){
        this.make = carMake
        this.model = carModel
        this.color = carColor
        this.doors = numOfDoors
        this.honk = function(){
            alert('BEEP BEEP FUCKER')
        }
    }

    let hondaCivic = new MakeCar('Honda','Civic','Silver', 4)