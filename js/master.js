// check if there is local storage options
let mainColors = localStorage.getItem("color_option");

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-backgrounds span");

let myInterval = setInterval(() => {
  // Get random number
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  // Change background image url
  landingPage.style.backgroundImage = `url("imgs/${imgsArray[randomNumber]}")`;
}, 5000);

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


// select skills selector
let ourSkills = document.querySelector(".skills");

window.onscroll = function () {
  // skills offset top
  let skillsOffsetTop = ourSkills.offsetTop;
  
  // outer height
  let skillsOuterHeight = ourSkills.offsetHeight;
  
  // window height
  let windowHeight = this.innerHeight;
  
  // window scroll top
  let windowScrollTop = this.pageYOffset;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {
    let allSkills = document.querySelectorAll(".skill-box .skill-progress span");
    allSkills.forEach(skill => {
      skill.style.width = skill.dataset.progress;
    });
  }
};

// create popup with the image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach(img => {
  img.addEventListener('click', (e) => {
    // create overlay element
    let overlay = document.createElement("div");

    // add class to overlay
    overlay.className = "popup-overlay";

    // append overlay to the body
    document.body.appendChild(overlay);

    // Create The popup
    let popupbox = document.createElement("div");

    // Add class to the popup box
    popupbox.className = "popup-box";

    if (img.alt !== null) {
      // create heading
      let imgHeading = document.createElement("h3");

      // create text for heading
      let imgText = document.createTextNode(img.alt);

      // append the text tp the heading
      imgHeading.appendChild(imgText);

      // appendt he heading to the popup box
      popupbox.appendChild(imgHeading);
    }

    // create span containing close button
    let closeSpan = document.createElement("span");

    // create the close icon
    //let closeButton = document.createElement("i");

    // add font awesome close icon to the button
    closeSpan.classList.add("fa");
    closeSpan.classList.add("fa-close");

    // append icon to span
    //closeSpan.appendChild(closeButton);

    // add class to span close button
    //closeButton.className = "close-button";
    closeSpan.classList.add("close-button");

    // add close button to the popus box
    popupbox.appendChild(closeSpan);

    // Create the image
    let popupImage = document.createElement("img");
    
    // set image src
    popupImage.src = img.src;

    // add image to popup box
    popupbox.appendChild(popupImage);

    // append the popup box to the body
    document.body.appendChild(popupbox);

  });
});

// close popup
document.addEventListener("click", function(e) {
  if (e.target.classList.contains("close-button")) {
    // remove the current popup
    //console.log(e.target.parentElement);
    e.target.parentElement.remove();

    // remove overlay
    document.querySelector(".popup-overlay").remove();
  }
});
