// *Variables*
// Create a variable and console log the value
let name = 'Fanni'
console.log(name)
// Create a variable, add 10 to it, and alert the value
    // let age = 1
    // age += 10
    // alert(age)
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4Nums(n1,n2,n3,n4){
    alert(n1-n2-n3-n4)
}
    // sub4Nums(5,3,3,2);
         
// Create a function that divides one number by another and returns the remainder +
function divide (n1,n2){
    return n1 % n2 
}
console.log(divide(11,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
    // function add2Nums (n1,n2){
    //     const sum = n1+n2
    //     if (sum > 50){
    //         alert('Jumanji')
    //     }
    // }


// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA +

function multi3Nums (n1,n2,n3){
    const product = n1 * n2 * n3
    if(product % 3 === 0){
        alert('ZEBRA')
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in +
    function hey (word,num){
        for(let i = 1; i<= num; i++){
            console.log(word)
        }
        
    }
    hey('hey',20)