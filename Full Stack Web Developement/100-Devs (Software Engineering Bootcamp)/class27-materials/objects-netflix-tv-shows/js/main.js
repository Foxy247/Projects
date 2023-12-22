//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class Netflix {
  constructor(name, numOfEp, rating, views) {
    this.name = name;
    this.numOfEp = numOfEp;
    this.rating = rating;
    this.views = views;
  }

  play() {
    console.log("playing");
  }
  stop() {
    console.log("stopping");
  }
  saveToPlaylist() {
    console.log("saved to List");
  }
}

let bridgerton = new Netflix("Bridgerton", "10", "95%", 200000);
// console.log(bridgerton);

for (let key in bridgerton) {
  console.log(key + ": " + bridgerton[key]);
}