document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();

  const apiKey = "HhcbPKsveYR0MtmY3AOuDlxnQymQrnov2Ycb2jrt";

  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("img").src = data.hdurl;
      document.querySelector("h3").innerText = data.explanation;
      document.querySelector("h2").innerText = data.title;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
