//Write your pseduo code first!

//0 -> 32

document.querySelector('#yell').addEventListener('click', convert)

function convert (){
    // I need a value that is in Celsius
    let temp = document.querySelector('#cel').value


    // convert from C into Fahrenheit
    temp = temp * 9/5 + 32


    // show it 
    document.querySelector('#placeToYell').innerText = temp

}


