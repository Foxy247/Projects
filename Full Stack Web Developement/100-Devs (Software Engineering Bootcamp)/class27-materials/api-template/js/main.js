//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector("input").value.toLowerCase();
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=T8ccYLqA1zbcC2ChngTzOXNeGfYGDFSEmz0MTk6a";

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// URL 1 HhcbPKsveYR0MtmY3AOuDlxnQymQrnov2Ycb2jrt;

// URL: T8ccYLqA1zbcC2ChngTzOXNeGfYGDFSEmz0MTk6a;

