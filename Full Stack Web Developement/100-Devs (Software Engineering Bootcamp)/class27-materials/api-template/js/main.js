//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector("input").value.toLowerCase();
  const url = "T8ccYLqA1zbcC2ChngTzOXNeGfYGDFSEmz0MTk6a" + choice;

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


HhcbPKsveYR0MtmY3AOuDlxnQymQrnov2Ycb2jrt;

// URL: T8ccYLqA1zbcC2ChngTzOXNeGfYGDFSEmz0MTk6a;

