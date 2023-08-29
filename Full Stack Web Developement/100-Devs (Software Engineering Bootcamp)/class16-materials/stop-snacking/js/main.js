//Create a function that grabs the number of snacks from the input and tells you to stop that many times

// set up event listener
// get value out of input
// 

document.querySelector('#help')
    .addEventListener('click', stopSnacking)

function stopSnacking (){
    const snacks = Number(document.querySelector('input').value)
    document.querySelector('#stops').innerText = ''
    
    for(i = 1 ; i <= snacks ; i++  ) {
        document.querySelector('#stops').innerText += ' STOP!'
    }

}