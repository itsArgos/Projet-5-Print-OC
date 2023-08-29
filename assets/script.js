const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

const btnLeft = document.querySelector(".arrow_left");
const btnRight = document.querySelector(".arrow_right");
const items = document.querySelectorAll("img");
const nbSlide = items.length;
let count = 0;

btnLeft.addEventListener("click", () => {
  // console.log("test bouton gauche");
});

btnRight.addEventListener("click", () => {
  // alert("alert test bouton droit");
});

function slideSuivant() {
  items[count].classList.remove("active");

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  items[count].classList.add("active");
  console.log(count);
}

btnRight.addEventListener("click", slideSuivant);
