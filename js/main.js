document.addEventListener("DOMContentLoaded", function () {
  var navItems = document.querySelectorAll(".navItem");
  var checkbox = document.getElementById("hamburgerCheckbox");

  navItems.forEach(function (navItem) {
    navItem.addEventListener("click", function (event) {
      // Check if the click target is not the checkbox
      if (event.target !== checkbox) {
        // Unselect the checkbox
        checkbox.checked = false;
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  document.querySelectorAll(".navItem").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetSectionId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        //for hamburger menu
        if (window.innerWidth <= 1024) {
          window.scrollTo({
            top: targetSection.offsetTop - 60,
            behavior: "smooth",
          });
        }
        //for nav bar
        else {
          const navbarHeight = document.querySelector(".menubar").offsetHeight;

          window.scrollTo({
            top: targetSection.offsetTop - navbarHeight,
            behavior: "smooth",
          });
        }
      }
    });
  });

  document.querySelectorAll(".logo").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetSectionId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (targetSection) {
        const navbarHeight = document.querySelector(".menubar").offsetHeight;

        window.scrollTo({
          top: targetSection.offsetTop - navbarHeight,
          behavior: "smooth",
        });
      }
    });
  });
});

const helloSticker = document.getElementsByClassName("helloImage")[0];
if (helloSticker) {
  helloSticker.addEventListener("click", () => {
    helloSticker.style.transition =
      "0.1s all cubic-bezier(0.17, 0.75, 0.58, 0.95)";
    helloSticker.style.transform = "scale(0.95)";

    // Delay to reset transition to hover effect
    setTimeout(() => {
      helloSticker.style.transition =
        "0.2s all cubic-bezier(0.17, 0.75, 0.58, 0.95)";
      if (helloSticker.matches(":hover")) {
        helloSticker.style.transform = "scale(1.05) rotate(1.5deg)";
      }
    }, 100);
  });
}

const navbarImages = document.querySelectorAll(".menubar img");
navbarImages.forEach((img) => {
  img.addEventListener("click", () => {
    img.style.transition = "0.1s all cubic-bezier(0.17, 0.75, 0.58, 0.95)";
    if (img.classList.contains("logo")) {
      img.style.transform = "scale(1.15)";
    } else if (img.matches(":hover")) {
      img.style.transform = "scale(0.95)";
    }

    // Delay to reset transition to hover effect
    setTimeout(() => {
      img.style.transition = "0.2s all cubic-bezier(0.17, 0.75, 0.58, 0.95)";
      // Check if this image is the logo
      if (img.classList.contains("logo")) {
        img.style.transform = "scale(1.25)";
      } else if (img.matches(":hover")) {
        img.style.transform = "scale(1.05)";
      }
    }, 100);
  });
});

// Get references to the elements
const aboutPicture = document.getElementsByClassName("about-picture")[0];
const meSrc = "img/aboutme/me.jpg";
const njitSrc = "img/aboutme/njit.jpeg";
const skateboardSrc = "img/aboutme/skateboarding.JPG";
const hikingSrc = "img/aboutme/hiking.jpg";
const yoyoSrc = "img/aboutme/yoyoing.jpg";
const blondeSrc = "img/aboutme/blonde.jpeg";
const rodeoSrc = "img/aboutme/rodeo.jpg";
const whatSrc = "img/aboutme/whatcouldpossiblygowrong.webp";
const letsStartSrc = "img/aboutme/letsstarthere.jpeg";

// Add event listeners to each keyword
const meKeyword = document.getElementsByClassName("me")[0];
const njitKeyword = document.getElementsByClassName("njit")[0];
const skateboardKeyword = document.getElementsByClassName("skateboarding")[0];
const hikingKeyword = document.getElementsByClassName("hiking")[0];
const yoyoKeyword = document.getElementsByClassName("yoyo")[0];
const blondeKeyword = document.getElementsByClassName("blonde")[0];
const rodeoKeyword = document.getElementsByClassName("rodeo")[0];
const whatKeyword = document.getElementsByClassName("what")[0];
const letsKeyword = document.getElementsByClassName("lets")[0];

if (meKeyword) {
  meKeyword.addEventListener("click", () => {
    aboutPicture.src = meSrc;
    aboutPicture.style.transform = "rotate(-2deg)";
  });
}

if (njitKeyword) {
  njitKeyword.addEventListener("mouseover", () => {
    aboutPicture.src = njitSrc;
    aboutPicture.style.transform = "rotate(1deg)";
  });

  njitKeyword.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
      aboutPicture.style.transform = "rotate(-2deg)";
      aboutPicture.src = meSrc;
    }, 200); // Delay in milliseconds
  });
}

if (skateboardKeyword) {
  skateboardKeyword.addEventListener("mouseover", () => {
    aboutPicture.src = skateboardSrc;
    aboutPicture.style.transform = "rotate(3deg)";
  });

  skateboardKeyword.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
      aboutPicture.style.transform = "rotate(-2deg)";
      aboutPicture.src = meSrc;
    }, 200); // Delay in milliseconds
  });
}

if (hikingKeyword) {
  hikingKeyword.addEventListener("mouseover", () => {
    aboutPicture.src = hikingSrc;
    aboutPicture.style.transform = "rotate(1deg)";
  });

  hikingKeyword.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
      aboutPicture.style.transform = "rotate(-2deg)";
      aboutPicture.src = meSrc;
    }, 200); // Delay in milliseconds
  });
}

if (yoyoKeyword) {
  yoyoKeyword.addEventListener("mouseover", () => {
    aboutPicture.src = yoyoSrc;
    aboutPicture.style.transform = "rotate(4deg)";
  });

  yoyoKeyword.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
      aboutPicture.style.transform = "rotate(-2deg)";
      aboutPicture.src = meSrc;
    }, 200); // Delay in milliseconds
  });
}

if (blondeKeyword) {
  blondeKeyword.addEventListener("mouseover", () => {
    aboutPicture.src = blondeSrc;
    aboutPicture.style.transform = "rotate(2deg)";
  });

  blondeKeyword.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
      aboutPicture.style.transform = "rotate(-2deg)";
      aboutPicture.src = meSrc;
    }, 200); // Delay in milliseconds
  });
}

if (rodeoKeyword) {
  rodeoKeyword.addEventListener("mouseover", () => {
    aboutPicture.src = rodeoSrc;
    aboutPicture.style.transform = "rotate(3deg)";
  });

  rodeoKeyword.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
      aboutPicture.style.transform = "rotate(-2deg)";
      aboutPicture.src = meSrc;
    }, 200); // Delay in milliseconds
  });
}

if (whatKeyword) {
  whatKeyword.addEventListener("mouseover", () => {
    aboutPicture.src = whatSrc;
    aboutPicture.style.transform = "rotate(4deg)";
  });

  whatKeyword.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
      aboutPicture.style.transform = "rotate(-2deg)";
      aboutPicture.src = meSrc;
    }, 200); // Delay in milliseconds
  });
}

if (letsKeyword) {
  letsKeyword.addEventListener("mouseover", () => {
    aboutPicture.src = letsStartSrc;
    aboutPicture.style.transform = "rotate(1deg)";
  });

  letsKeyword.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
      aboutPicture.style.transform = "rotate(-2deg)";
      aboutPicture.src = meSrc;
    }, 200); // Delay in milliseconds
  });
}
