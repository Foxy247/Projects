//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  let drink = document.querySelector("input").value;

  fetch(`https://api.nasa.gov/`)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      document.querySelector("h2").innerText = data;
      document.querySelector("img").src = data;
      document.querySelector("h3").innerText = data;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    
    walk(){
      console.log('walking');
    }
    eat(){
      console.log('eating');
    }
  }
}



