//Create a pizza object that has four properties and three methods

let pizza = {}

pizza.size = 'medium'
pizza.toppings = ['cheese', 'mushrooms', 'mozarella']
pizza.prize = 12
pizza.manufacturer = 'Dr. Ötker'
pizza.shape = 'round'

pizza.make = function makePizza (){
    console.log('lets make some piiiizzzaaa')
}
pizza.estimatedDeliveryTime = function(){
    console.log('calculating...');
}
pizza.burnMouth = function(){
    console.log('alkjaöölakjsdf');
}