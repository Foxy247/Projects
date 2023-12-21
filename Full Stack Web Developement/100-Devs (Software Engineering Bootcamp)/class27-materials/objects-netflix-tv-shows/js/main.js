//Create a Netflix TV Show class with a constructor that makes Netflix TV Shows with 4 properties and 3 methods

class Netflix {
  constructor(name, length, rating, views) {
    this.name = name;
    this.length = length;
    this.rating = rating;
    this.views = views;
  }

  play() {
    console.log("playing");
  }
  stop() {
    console.log("stopping");
  }
}
