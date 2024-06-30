//Get a dog photo from the dog.ceo api and place the photo in the DOM

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json()) // make sure the data is json
    .then(data => {
      console.log(data.message)
      document.querySelector('img').src = data.message    
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

// how do I plug this into the dom?
    //with document.querySelector 

    