import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  console.log("Hello Rigo from the console!");

  const button = document.querySelector("#generateGame");

  // Select only the span elements inside the h2 tags
  const showElement = document.querySelector(".show");
  const placesElement = document.querySelector(".places");
  const partnerElement = document.querySelector(".partner");

  const showArray = ["DanDaDan", "My Hero Academia", "Attack On Titan", "Invincible"];
  const placesArray = ["Outside", "Bedroom", "Up Stairs", "Down Stairs", "Back Yard"];
  const partnerArray = ["Father", "Mother", "Sister", "Brother", "Wife", "Husband"];

  const generateGame = () => {
    showElement.innerHTML = showArray[Math.floor(Math.random() * showArray.length)];
    placesElement.innerHTML = placesArray[Math.floor(Math.random() * placesArray.length)];
    partnerElement.innerHTML = partnerArray[Math.floor(Math.random() * partnerArray.length)];
  };

  button.addEventListener("click", generateGame);
};

