// List of background images
const images = [
  "images/pool6.jpg",
  "images/poolOne.jpg",
  "images/poolTwo.jpg"
];

let currentIndex = 0;

// Set initial background
function updateImage() {
document.querySelector(".image-slider").style.backgroundImage =
  `url(${images[currentIndex]})`;
}

updateImage();

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.querySelector(".image-slider").style.backgroundImage =
    `url(${images[currentIndex]})`;
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.querySelector(".image-slider").style.backgroundImage =
    `url(${images[currentIndex]})`;
}