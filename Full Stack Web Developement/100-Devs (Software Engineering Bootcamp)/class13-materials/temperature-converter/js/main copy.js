//Write your pseduo code first!


    // take temperature out of input (cel)
    const temp = document.querySelector('#cel').value;


    // convert the value 
    const value = function convertToFahrenheit (temp) {
        temp * 9/5 + 32
    }

    // display it on page (id place ) show value to user
    document.querySelector('#placeToYell').innerText = `${value} `


