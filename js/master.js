// check if there is local storage options
let mainColors = localStorage.getItem("color_option");

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

let myInterval = setInterval(() => {
  // Get random number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  // Change background image url
  landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
}, 2500);

if (mainColors !== null) {
  document.documentElement.style.setProperty("--main-color", mainColors);
}

// Toggle spin class on icon
document.querySelector(".toggle-settings .fa-gear").onclick = function () {
  // toggle rotation
  this.classList.toggle("fa-spin");
  // toggle class open main settings box
  document.querySelector(".settings-box").classList.toggle("open");
};

// Change Colors
const colorsLi = document.querySelectorAll(".colors-list li");

colorsLi.forEach((li) => {
  li.classList.remove("active");
  li.addEventListener("click", (e) => {
    // change root color
    document.documentElement.style.setProperty(
      "--main-color",
      e.target.dataset.color
    );

    // set color on local storage
    localStorage.setItem("color_option", e.target.dataset.color);

    // remove active class from all
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // add active class
    e.target.classList.add("active");
  });
});

// random background option
let backgroundOption = true;

// variable to control the interval
let backgroundInterval;

// check if there is local storage random background item
let backgroundLocationItem = localStorage.getItem("background_option");

// check if random background local storage is not empty
if (backgroundLocationItem !== null) {
  console.log("Not Empty");
  // console.log(backgroundLocationItem);
  if (backgroundLocationItem === 'true') {
    backgroundLocationItem = true;
  } else {
    backgroundLocationItem = false;
  }
  console.log(backgroundLocationItem);

  // remove active class from all spans
  document.querySelectorAll(".random-backgrounds span").forEach(element => {
    element.classList.remove("active");
  });

  if (backgroundLocationItem === 'true') {
    document.querySelector(".random-backgrounds .yes").classList.add("active");
  } else {
    document.querySelector(".random-backgrounds .no").classList.add("active");
    clearInterval(myInterval);
  }
}

// Loop On All Spans
randomBackEl.forEach((span) => {
  // Click On Every Span
  span.addEventListener("click", (e) => {
    e.target.parentElement.querySelectorAll(".active").forEach((element) => {
      element.classList.remove("active");
    });

    // Add Active Class On Self
    e.target.classList.add("active");

    if (e.target.dataset.background === "yes") {
      myInterval = setInterval(() => {
        // Get random number
        let randomNumber = Math.floor(Math.random() * imgsArray.length);
        // Change background image url
        landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
      }, 2500);

      backgroundOption = true;
      randomizeImgs();
      localStorage.setItem("background_option", true);
    } else {
      backgroundOption = false;
      clearInterval(myInterval);
      console.log(backgroundInterval);
      localStorage.setItem("background_option", false);
    }
  });
});

if (mainColors !== null) {
  // Remove Active Class From All Colors List Item
  document.querySelectorAll(".colors-list li").forEach((element) => {
    element.classList.remove("active");
    // Add Active Class On Element With Data-Color === Local Storage Item
    if (element.dataset.color === mainColors) {
      // Add Active Class
      element.classList.add("active");
      // console.log(element);
    }
  });
}

// Select landing page element
let landingPage = document.querySelector(".landing-page");

// Array of images
let imgsArray = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];


// Function to randomize imgs
function randomizeImgs() {
  if (backgroundOption == true) {
    myInterval;
  }
}

randomizeImgs();
