"use strict";

const bioSection = document.querySelector(".bio");
const bioLink = document.querySelector(".bio-link");
const projectSection = document.querySelector(".projects");
const projectLink = document.querySelector(".projects-link");
const testimonialsSection = document.querySelector(".testimonials");
const testimonialsLink = document.querySelector(".testimonials-link");

bioLink.addEventListener("click", () => {
  bioSection.scrollIntoView({ behavior: "smooth" });
});

projectLink.addEventListener("click", () => {
  projectSection.scrollIntoView({ behavior: "smooth" });
});

testimonialsLink.addEventListener("click", () => {
  testimonialsSection.scrollIntoView({ behavior: "smooth" });
});

// Intersection Observer - scroll to top

const scrollButton = document.querySelector(".scroll-to-top");
const topOfPage = document.querySelector(".top");

const obsCallback = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  scrollButton.classList.remove("cover");
  scrollButton.classList.add("appear");
};

const obsOptions = {
  root: null,
  threshold: 0.25,
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(projectSection);

// Intersection Observer - remove scroll to top when at top of page

const obsCallback2 = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  scrollButton.classList.add("cover");
  scrollButton.classList.remove("appear");
};

const obsOptions2 = {
  root: null,
  threshold: 0.25,
};

const observer2 = new IntersectionObserver(obsCallback2, obsOptions2);

observer2.observe(topOfPage);

// Scroll to top

scrollButton.addEventListener("click", () => {
  topOfPage.scrollIntoView({ behavior: "smooth" });
});

// Dark mode / Light mode

const sunIcon = document.querySelector(".fa-sun");
const moonIcon = document.querySelector(".fa-moon");

sunIcon.addEventListener("click", () => {
  sunIcon.classList.add("cover");
  moonIcon.classList.remove("cover");
  document.body.style.backgroundColor = "#EDEADE";
});

moonIcon.addEventListener("click", () => {
  sunIcon.classList.remove("cover");
  moonIcon.classList.add("cover");
  document.body.style.backgroundColor = "#1f2833";
});

//
// Hero name animation
//

const heroName = document.querySelector(".hero-name");

let r = 0;
let nameArray = ["N", "i", "c", "k", " ", "U", "l", "r", "i", "c", "h"];
let numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Shuffle array into random order
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffleArray(numberArr);

// Post numberArr to dom
heroName.textContent = numberArr.join("");

// Loop through numberArr using r and use num as index value
// to replace number displayed with corresponding letter in nameArr
let onlyNumsArr = [...numberArr];

function convertNumbers() {
  numberArr.toString();

  let numberToBeReplaced = onlyNumsArr[r];

  numberArr[numberToBeReplaced] = nameArray[numberToBeReplaced];

  // Post numberArr to dom
  heroName.textContent = numberArr.join("");

  // Call function 10x
  if (r === 10) {
    return;
  } else {
    r++;
    // console.log(`r = ${r}`);
    setTimeout(convertNumbers, 250);
  }
}

convertNumbers();
