const images = [
  {
    image: 'img/01.webp',
    title: "Marvel's Spiderman Miles Morale",
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.'
  },
  {
    image: 'img/02.webp',
    title: 'Ratchet & Clank: Rift Apart',
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.'
  },
  {
    image: 'img/03.webp',
    title: 'Fortnite',
    text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.'
  },
  {
    image: 'img/04.webp',
    title: 'Stray',
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city'
  },
  {
    image: 'img/05.webp',
    title: "Marvel's Avengers",
    text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay."
  }
]
const fwdBtn = document.getElementById('fwd-btn')
const rwdBtn = document.getElementById('rwd-btn')
/* crea un array di cards */
const imageContainer = document.getElementById('img-container')
images.forEach((element, index) => {
  imageContainer.innerHTML += `
      <div class="img-card d-none">
        <img class="photo" src="${element.image}" alt="pic">
        <h2 class="title">${element.title}</h2>
        <p class="description">${element.text}</p>
      </div>`
})

const imgCards = document.querySelectorAll('.img-card')
let currentImg = 0
imgCards[currentImg].classList.remove('d-none')
/* gestisci il click */

/* 

images[currentImg].classList.add("d-inline-block");
thumbImages[currentImg].classList.add("active-thumb") */

clickNxt = fwdBtn.addEventListener('click', function () {
  if (currentImg == imgCards.length - 1) {
    imgCards[currentImg].classList.add('d-none')
    currentImg = 0
    imgCards[currentImg].classList.remove('d-none')
  } else if (currentImg < imgCards.length - 1) {
    imgCards[currentImg].classList.add('d-none')
    currentImg++
    imgCards[currentImg].classList.remove('d-none')
  }
})
clickRwd = rwdBtn.addEventListener('click', function () {
  if (currentImg == 0) {
    imgCards[currentImg].classList.add('d-none')
    currentImg = images.length - 1
    imgCards[currentImg].classList.remove('d-none')
  } else if (currentImg > 0) {
    imgCards[currentImg].classList.add('d-none')
    currentImg--
    imgCards[currentImg].classList.remove('d-none')
  }
})
