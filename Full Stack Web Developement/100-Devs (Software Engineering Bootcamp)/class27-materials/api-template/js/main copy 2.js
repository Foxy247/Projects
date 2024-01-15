document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value.toLowerCase();

  const apiKey = "HhcbPKsveYR0MtmY3AOuDlxnQymQrnov2Ycb2jrt";

  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${choice}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.media_type === "image") {
        document.querySelector("img").src = data.hdurl;
        document.querySelector("iframe").src = ""; // Set video source to empty string
      } else if (data.media_type === "video") {
        document.querySelector("img").src = ""; // Set image source to empty string
        document.querySelector("iframe").src = data.url;
      }
      
      document.querySelector("h3").innerText = data.explanation;
      document.querySelector("h2").innerText = data.title;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
