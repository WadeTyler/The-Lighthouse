
import { reviews } from "./constants.js";


const porthole = document.getElementById("porthole");
const reviewContent = document.getElementById("reviewContent");
const reviewerName = document.getElementById("reviewerName")

// Initialize Reviews
let currReview = 0;
let intervalPaused = false;   // Used to pause auto cycle temporarily after manual next/prev

// Initialize to review 0
porthole.style.backgroundImage = `url("${reviews[currReview].img}")`;
reviewContent.innerText = `"${reviews[currReview].content}"`;
reviewerName.innerText = reviews[currReview].name;

// Auto Cycle reviews
const cycleReviews = setInterval(() => {

  if (!intervalPaused) {
    porthole.style.backgroundImage = `url("${reviews[currReview].img}")`;
    reviewContent.innerText = `"${reviews[currReview].content}"`;
    reviewerName.innerText = reviews[currReview].name;  
    currReview++;

    if (currReview === reviews.length) {
      currReview = 0;
    }
  }
}, 8000);


// Cycle to the next review
const nextReview = () => {
  currReview++;

  if (currReview >= reviews.length) {
    currReview = 0;
  }

  porthole.style.backgroundImage = `url("${reviews[currReview].img}")`;
  reviewContent.innerText = `"${reviews[currReview].content}"`;
  reviewerName.innerText = reviews[currReview].name;

  // Pause the the auto cycle for 8 seconds.
  intervalPaused = true;
  setTimeout(() => {
    intervalPaused = false;
  }, 8000);
}
window.nextReview = nextReview;

// Cycle to the previous review
const prevReview = () => {
  currReview--;

  if (currReview < 0) {
    currReview = reviews.length - 1;
  }

  porthole.style.backgroundImage = `url("${reviews[currReview].img}")`;
  reviewContent.innerText = `"${reviews[currReview].content}"`;
  reviewerName.innerText = reviews[currReview].name;

  // Pause the the auto cycle for 8 seconds.
  intervalPaused = true;
  setTimeout(() => {
    intervalPaused = false;
  }, 8000);
}
window.prevReview = prevReview;


// Navigate to the menu page
const navigateToMenu = () => {
  window.location.href = "./pages/menu.html";
}
window.navigateToMenu = navigateToMenu;


// Navigate to the about page
const navigateToAbout = () => {
  window.location.href = "./pages/about.html";
}

window.navigateToAbout = navigateToAbout;

