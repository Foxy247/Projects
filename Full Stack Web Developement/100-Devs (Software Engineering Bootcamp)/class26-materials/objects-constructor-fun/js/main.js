//Create a constructor with 4 properties and 3 methods

function PizzaFactory (name,size,sauce,toppings){
    this.pizzaName = name
    this.pizzaSize = size
    this.pizzaSauce = sauce 
    this.pizzaToppings = toppings

    this.estimatedDeliveryTime = function (){
        console.log('Calculating ...');
    }
    this.burnMouth = function(){
        console.log('aaaaah');
    }
    this.frisbee = function(){
        console.log('Yeeet');
    }
}

let 