"use strict";

// Mobile Menu
const mobileMenuContainer = document.querySelector(".mobile-menu");
const hamburgerIcon = document.querySelector(".fa-bars");

const heroContainer = document.querySelector(".hero");
const bioContainer = document.querySelector(".bio");
const projectsContainer = document.querySelector(".projects");
const testimonialsContainer = document.querySelector(".testimonials");

// Contact me links
const contactContainer = document.querySelector(".contact");
const contactButton = document.querySelector(".contact-button");
const contactMobileButton = document.querySelector(".contact-button_mobile");

const linkedinIcon = document.querySelector(".fa-linkedin");
const githubIcon = document.querySelector(".fa-github");
const envelopeIcon = document.querySelector(".fa-envelope");

const emailModalContainer = document.querySelector(".email-modal");
const overlayContainer = document.querySelector(".overlay");
const emailField = document.querySelector(".email-field");
const emailMessage = document.querySelector(".email-message");
const bodyEl = document.querySelector("body");
const xMarkButton = document.querySelector(".fa-xmark");

contactButton.addEventListener("click", () => {
  contactContainer.scrollIntoView({ behavior: "smooth" });
});

// Click email icon, opens email modal
envelopeIcon.addEventListener("click", () => {
  emailModalContainer.style.display = "block";
  overlayContainer.style.display = "block";
  bodyEl.style.overflow = "hidden";

  const elementArr = [document, xMarkButton];

  elementArr.map((el) => {
    el.addEventListener("click", (e) => {
      if (e.target === overlayContainer || e.target === xMarkButton) {
        emailModalContainer.style.display = "none";
        overlayContainer.style.display = "none";
        bodyEl.style.overflow = "visible";

        emailField.value = "";
        emailMessage.value = "";
      }
    });
  });
});

// Click contact me mobile button
contactMobileButton.addEventListener("click", () => {
  if (window.getComputedStyle(mobileMenuContainer).display === "block") {
    mobileMenuContainer.style.display = "none";

    heroContainer.style.display = "grid";
    bioContainer.style.display = "block";
    projectsContainer.style.display = "block";
    testimonialsContainer.style.display = "block";
    contactContainer.style.display = "grid";
  }
  contactContainer.scrollIntoView({ behavior: "smooth" });
});

linkedinIcon.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/nicholas-ulrich-code/", "_blank");
});

githubIcon.addEventListener("click", () => {
  window.open("https://github.com/nick-ulrich", "_blank");
});

// Scroll to section
const bioLink = document.querySelector(".bio-link");
const bioLinkMobile = document.querySelector(".bio-link_mobile");
const projectSection = document.querySelector(".projects");
const projectLink = document.querySelector(".projects-link");
const projectLinkMobile = document.querySelector(".projects-link_mobile");
const testimonialsLink = document.querySelector(".testimonials-link");
const testimonialsLinkMobile = document.querySelector(
  ".testimonials-link_mobile"
);

const toggleMobileMenuAndPage = function () {
  // used 'window.getComputedStyle(el).display' bc 'el.style.display'
  // was not evaluating correctly in conditional
  if (window.getComputedStyle(mobileMenuContainer).display === "none") {
    mobileMenuContainer.style.display = "block";

    heroContainer.style.display = "none";
    bioContainer.style.display = "none";
    projectsContainer.style.display = "none";
    testimonialsContainer.style.display = "none";
    contactContainer.style.display = "none";
  } else if (window.getComputedStyle(mobileMenuContainer).display === "block") {
    mobileMenuContainer.style.display = "none";

    heroContainer.style.display = "grid";
    bioContainer.style.display = "block";
    projectsContainer.style.display = "block";
    testimonialsContainer.style.display = "block";
    contactContainer.style.display = "grid";
  }
};

// hide/display mobile menu
hamburgerIcon.addEventListener("click", () => {
  toggleMobileMenuAndPage();
});

bioLink.addEventListener("click", () => {
  bioContainer.scrollIntoView({ behavior: "smooth" });
});

bioLinkMobile.addEventListener("click", () => {
  toggleMobileMenuAndPage();
  bioContainer.scrollIntoView({ behavior: "smooth" });
});

projectLink.addEventListener("click", () => {
  projectsContainer.scrollIntoView({ behavior: "smooth" });
});

projectLinkMobile.addEventListener("click", () => {
  toggleMobileMenuAndPage();
  projectsContainer.scrollIntoView({ behavior: "smooth" });
});

testimonialsLink.addEventListener("click", () => {
  testimonialsContainer.scrollIntoView({ behavior: "smooth" });
});

testimonialsLinkMobile.addEventListener("click", () => {
  toggleMobileMenuAndPage();
  testimonialsContainer.scrollIntoView({ behavior: "smooth" });
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

// PROJECT LINKS

const [...katespadeLink] = document.querySelectorAll(".katespade");
const [...gucciLink] = document.querySelectorAll(".gucci");
const [...flowersLink] = document.querySelectorAll(".flowers");
const [...applereceiptLink] = document.querySelectorAll(".applereceipt");
const [...stockPortalLink] = document.querySelectorAll(".stock-portal");
const [...orderlyLink] = document.querySelectorAll(".orderly");

const stockPortalGithub = document.querySelector(".stock-portal-github");
const orderlyGithub = document.querySelector(".orderly-github");

katespadeLink.map((link) => {
  link.addEventListener("click", () => {
    window.open("../katespade copy.html", "_blank");
  });
});

gucciLink.map((link) => {
  link.addEventListener("click", () => {
    window.open("../gucci copy.html", "_blank");
  });
});

flowersLink.map((link) => {
  link.addEventListener("click", () => {
    window.open("../1800flowers.html", "_blank");
  });
});

applereceiptLink.map((link) => {
  link.addEventListener("click", () => {
    window.open("../applereceipt/index.html", "_blank");
  });
});

stockPortalLink.map((link) => {
  link.addEventListener("click", () => {
    window.open("https://stockportal.netlify.app/", "_blank");
  });
});

orderlyLink.map((link) => {
  link.addEventListener("click", () => {
    window.open("https://orderlyinventory.netlify.app/", "_blank");
  });
});

stockPortalGithub.addEventListener("click", () => {
  window.open("https://github.com/nick-ulrich/StockPortal", "_blank");
});

orderlyGithub.addEventListener("click", () => {
  window.open("https://github.com/nick-ulrich/orderly-inventory", "_blank");
});
