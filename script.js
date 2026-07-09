// List of background images
const images = [
  "images/pool6.jpg",
  "images/poolOne.jpg",
  "images/poolLesson2.jpg"
];

let currentIndex = 0;

function updateImage() {
  const slider = document.querySelector(".image-slider");

  // Set the background image
  slider.style.backgroundImage = `url(${images[currentIndex]})`;

  // Remove the special class every time
  slider.classList.remove("bottom-half");

  // If the current image is the one you want to crop, add the class
  if (images[currentIndex].includes("poolLesson2.jpg")) {
    slider.classList.add("bottom-half");
  }
}

if (document.querySelector(".image-slider")) {
  updateImage();
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}


const lessonImages = [
  "images/poolLesson1.jpg",
  "images/poolLesson3.jpg",
  "images/poolLesson4.jpg",
  "images/poolTwo.jpg"
];

let lessonIndex = 0;

function updateLessonImage() {
  document.querySelector(".lessons-slider").style.backgroundImage =
    `url(${lessonImages[lessonIndex]})`;
}

if (document.querySelector(".lessons-slider")) {
updateLessonImage();
}

function nextLessonImage() {
  lessonIndex = (lessonIndex + 1) % lessonImages.length;
  updateLessonImage();
}

function prevLessonImage() {
  lessonIndex = (lessonIndex - 1 + lessonImages.length) % lessonImages.length;
  updateLessonImage();
}

const eventImages = [
  "images/poolEvents1.jpg",
  "images/poolEvents2.jpg",
  "images/poolEvents3.jpg"
];

let eventIndex = 0;

function updateEventImage() {
  const slider = document.querySelector(".events-slider");

  // Set the background image
  slider.style.backgroundImage = `url(${eventImages[eventIndex]})`;

  // Remove zoom class every time
  slider.classList.remove("event-zoom");

  // Apply zoom only to poolEvents3.jpg
  if (eventImages[eventIndex].includes("poolEvents3.jpg")) {
    slider.classList.add("event-zoom");
  }
}

if (document.querySelector(".events-slider")) {
  updateEventImage();
}

function nextEventImage() {
  eventIndex = (eventIndex + 1) % eventImages.length;
  updateEventImage();
}

function prevEventImage() {
  eventIndex = (eventIndex - 1 + eventImages.length) % eventImages.length;
  updateEventImage();
}
