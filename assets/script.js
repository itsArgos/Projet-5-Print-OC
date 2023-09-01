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

const paragraph = document.querySelector("#banner p");
const image = document.querySelector(".banner-img");
const btnLeft = document.querySelector(".arrow_left");
const btnRight = document.querySelector(".arrow_right");
let currentIndex = 0;

/*** Fonction qui permet de modifier la src de mon image + l'alt (tagLine) ***/
function updateSlide() {
  const slide = slides[currentIndex];
  image.src = "./assets/images/slideshow/" + slide.image;
  paragraph.innerHTML = slide.tagLine;
}

/*** Fonction qui permet de supprimer tout les dot_selected puis d'ajouter le dot_selected seulement sur le slide séléctionné ****/
function dotSelected() {
  const dotElements = document.querySelectorAll(".dot");
  dotElements.forEach((dot) => {
    dot.classList.remove("dot_selected");
  });
  dotElements[currentIndex].classList.add("dot_selected");
}

/*** Flêche de gauche ***/
btnLeft.addEventListener("click", () => {
  // console.log("test bouton gauche");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }
  updateSlide();
  dotSelected();
});

/*** Flêche de droite ***/
btnRight.addEventListener("click", () => {
  // alert("alert test bouton droit");
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateSlide();
  dotSelected();
});

const dots = document.querySelector(".dots");
// console.log(dots);

slides.forEach((slide, i) => {
  // console.log(slide, i);
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dots.appendChild(dot);

  /** Cette action sert à dire qu'au rechargement de la page le dot_selected apparait sur la 1ère image **/
  if (i === 0) {
    dot.classList.add("dot_selected");
  }
});
