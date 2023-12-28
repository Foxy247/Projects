fetch("")
  .then((res) => res.json()) // make sure the data is json
  .then((data) => {
    console.log(data.message);
    document.querySelector("img").src = data.message;
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
