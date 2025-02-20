import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const generateGame = () => {
    const showArray = ["DanDaDan", "My Hero Acadamia", "Attack On Titan", "Invincible"];
    const placesArray = ["Outside", "Bedroom", "Up Stairs", "Down Stairs", "Back Yard"];
    const partnerArray = ["Father", "Mother", "Sister", "Brother", "Wife", "Husband"];
  
    let showIndex = Math.floor(Math.random() * showArray.length)
    let placesIndex  = Math.floor(Math.random() * placesArray.length)
    let partnerIndex  = Math.floor(Math.random() * partnerArray.length)
  
    const show = document.querySelector(".show")
    const places = document.querySelector(".places")
    const partner = document.querySelector(".partner")
  
    show.innerHTML = showArray[showIndex]
    places.innerHTML = placesArray[placesIndex]
    partner.innerHTML =partnerArray[nameIndex]
  
  }
  console.log("Hello Rigo from the console!");
};
