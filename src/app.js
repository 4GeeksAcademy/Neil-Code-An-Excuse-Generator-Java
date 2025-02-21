import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  console.log("Hello Rigo from the console!");
  const gameElement = document.querySelector("#game")
  const button = document.querySelector("#generateGame")

  const showArray = ["DanDaDan", "My Hero Acadamia", "Attack On Titan", "Invincible"];
  const placesArray = ["Outside", "Bedroom", "Up Stairs", "Down Stairs", "Back Yard"];
  const partnerArray = ["Father", "Mother", "Sister", "Brother", "Wife", "Husband"];

  const generateGame = () => {
   
    let game = `${showArray[Math.floor(Math.random() * showArray.length)]}
    ${placesArray[Math.floor(Math.random() * placesArray.length)]}
    ${partnerArray[Math.floor(Math.random() * partnerArray.length)]}`
    gameElement.innerHTML = game


    // let showIndex = Math.floor(Math.random() * showArray.length)
    // let placesIndex = Math.floor(Math.random() * placesArray.length)
    // let partnerIndex = Math.floor(Math.random() * partnerArray.length)




    // const show = document.querySelector(".show")
    // const places = document.querySelector(".places")
    // const partner = document.querySelector(".partner")

    // show.innerHTML = showArray[showIndex]
    // places.innerHTML = placesArray[placesIndex]
    // partner.innerHTML = partnerArray[partnerIndex]

  }
  button.addEventListener("click", generateGame)

}
