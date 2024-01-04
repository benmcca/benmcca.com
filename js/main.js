document.addEventListener('DOMContentLoaded', function () {
    var navItems = document.querySelectorAll('.navItem');
    var checkbox = document.getElementById('hamburgerCheckbox');

    navItems.forEach(function (navItem) {
        navItem.addEventListener('click', function (event) {
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
    document.querySelectorAll('.navItem').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                //for hamburger menu
                if (window.innerWidth <= 1024) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 60,
                        behavior: 'smooth',
                    });
                }
                //for nav bar
                else {
                    const navbarHeight = document.querySelector('.menubar').offsetHeight;
                    
                    window.scrollTo({
                        top: targetSection.offsetTop - navbarHeight,
                        behavior: 'smooth',
                    });
                }
            }
        });
    });

    document.querySelectorAll('.logo').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetSectionId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetSectionId);

            if (targetSection) {
                const navbarHeight = document.querySelector('.menubar').offsetHeight;

                window.scrollTo({
                    top: targetSection.offsetTop - navbarHeight,
                    behavior: 'smooth',
                });
            }
        });
    });
    
});

// Get references to the elements
const aboutPicture = document.getElementsByClassName('about-picture')[0];
const meSrc = 'img/aboutme/me.jpg';
const njitSrc = 'img/aboutme/njit.jpeg';
const skateboardSrc = 'img/aboutme/skateboarding.JPG'
const hikingSrc = 'img/aboutme/hiking.jpg'
const yoyoSrc = 'img/aboutme/yoyoing.jpg'
const blondeSrc = 'img/aboutme/blonde.jpeg'
const rodeoSrc = 'img/aboutme/rodeo.jpg'
const whatSrc = 'img/aboutme/whatcouldpossiblygowrong.webp'
const letsStartSrc = 'img/aboutme/letsstarthere.jpeg'

// Add event listeners to each keyword
const meKeyword = document.getElementsByClassName('me')[0];
const njitKeyword = document.getElementsByClassName('njit')[0];
const skateboardKeyword = document.getElementsByClassName('skateboarding')[0];
const hikingKeyword = document.getElementsByClassName('hiking')[0];
const yoyoKeyword = document.getElementsByClassName('yoyo')[0];
const blondeKeyword = document.getElementsByClassName('blonde')[0];
const rodeoKeyword = document.getElementsByClassName('rodeo')[0];
const whatKeyword = document.getElementsByClassName('what')[0];
const letsKeyword = document.getElementsByClassName('lets')[0];

if (meKeyword) {
    meKeyword.addEventListener('click', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

if (njitKeyword) {
    njitKeyword.addEventListener('mouseover', () => {
        aboutPicture.src = njitSrc;
        aboutPicture.style.transform = 'rotate(1deg)';
    });

    njitKeyword.addEventListener('mouseout', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

if (skateboardKeyword) {
    skateboardKeyword.addEventListener('mouseover', () => {
        aboutPicture.src = skateboardSrc;
        aboutPicture.style.transform = 'rotate(3deg)';
    });

    skateboardKeyword.addEventListener('mouseout', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

if (hikingKeyword) {
    hikingKeyword.addEventListener('mouseover', () => {
        aboutPicture.src = hikingSrc;
        aboutPicture.style.transform = 'rotate(2deg)';
    });

    hikingKeyword.addEventListener('mouseout', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

if (yoyoKeyword) {
    yoyoKeyword.addEventListener('mouseover', () => {
        aboutPicture.src = yoyoSrc;
        aboutPicture.style.transform = 'rotate(4deg)';
    });

    yoyoKeyword.addEventListener('mouseout', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

if (blondeKeyword) {
    blondeKeyword.addEventListener('mouseover', () => {
        aboutPicture.src = blondeSrc;
        aboutPicture.style.transform = 'rotate(2deg)';
    });

    blondeKeyword.addEventListener('mouseout', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

if (rodeoKeyword) {
    rodeoKeyword.addEventListener('mouseover', () => {
        aboutPicture.src = rodeoSrc;
        aboutPicture.style.transform = 'rotate(4deg)';
    });

    rodeoKeyword.addEventListener('mouseout', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

if (whatKeyword) {
    whatKeyword.addEventListener('mouseover', () => {
        aboutPicture.src = whatSrc;
        aboutPicture.style.transform = 'rotate(5deg)';
    });

    whatKeyword.addEventListener('mouseout', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

if (letsKeyword) {
    letsKeyword.addEventListener('mouseover', () => {
        aboutPicture.src = letsStartSrc;
        aboutPicture.style.transform = 'rotate(3deg)';
    });

    letsKeyword.addEventListener('mouseout', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

function getRandomRotation(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rotateImageRandomly(imageElement) {
    const randomRotation = getRandomRotation(-12, 12);
    imageElement.style.transform = `rotate(${randomRotation}deg) scale(1.0)`;
}

function resetRotation(imageElement) {
    imageElement.style.transform = 'rotate(0deg) scale(1.1)';
}

const logoItems = document.querySelectorAll('.logo-item img');

logoItems.forEach(image => {
    rotateImageRandomly(image);

    // Add event listener for hover
    image.addEventListener('mouseenter', function () {
        resetRotation(this);
    });

    // Add event listener for mouse leave (optional: reset rotation when mouse leaves the image)
    image.addEventListener('mouseleave', function () {
        rotateImageRandomly(this);
    });
});