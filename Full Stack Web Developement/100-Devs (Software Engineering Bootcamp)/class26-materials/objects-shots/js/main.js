//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.strDrink)
      document.querySelector('img').src = 
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

    
    let array = [1,2,3]