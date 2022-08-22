const rightArrow = document.getElementById("sliderarrow_right")
const leftArrow = document.getElementById("sliderarrow_left")


const sliderTrack = document.getElementById('our-team-slider__track')
const personCard = document.querySelector('.person-card')

const scrollRight = () => {
  sliderTrack.scrollLeft += personCard.offsetWidth * 2;
  if (sliderTrack.scrollWidth === sliderTrack.scrollLeft + sliderTrack.clientWidth) {
    rightArrow.style.display = "none";
  }

  leftArrow.style.display = "flex"
}
const scrollLeft = () => {
  sliderTrack.scrollLeft -= personCard.offsetWidth * 2;

  if (sliderTrack.scrollLeft <= 0) {
    leftArrow.style.display = "none";
  }
  rightArrow.style.display = "flex"
}

rightArrow.addEventListener('click', scrollRight)
leftArrow.addEventListener('click', scrollLeft)
scrollLeft()

const togglebutton = document.getElementById('toggleButton');
const navList = document.getElementById('nav-list');
togglebutton.addEventListener('click', () => {
navList.classList.toggle('active');
})