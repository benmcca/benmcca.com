// Get references to the elements
const aboutPicture = document.getElementsByClassName('about-picture')[0];
const meSrc = 'img/aboutme/me.jpg';
const njitSrc = 'img/aboutme/njit.jpeg';
const skateboardSrc = 'img/aboutme/skateboarding.jpg'
const hikingSrc = 'img/aboutme/hiking.jpg'
const yoyoSrc = 'img/aboutme/yoyoing.jpg'

// Add event listeners to each keyword
const meKeyword = document.getElementsByClassName('me')[0];
const njitKeyword = document.getElementsByClassName('njit')[0];
const skateboardKeyword = document.getElementsByClassName('skateboarding')[0];
const hikingKeyword = document.getElementsByClassName('hiking')[0];
const yoyoKeyword = document.getElementsByClassName('yoyo')[0];

if (meKeyword) {
    meKeyword.addEventListener('click', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}

if (njitKeyword) {
    njitKeyword.addEventListener('click', () => {
        aboutPicture.src = njitSrc;
        aboutPicture.style.transform = 'rotate(3deg)';
    });
    
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
    skateboardKeyword.addEventListener('click', () => {
        aboutPicture.src = skateboardSrc;
        aboutPicture.style.transform = 'rotate(3deg)';
    });
    
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
    hikingKeyword.addEventListener('click', () => {
        aboutPicture.src = hikingSrc;
        aboutPicture.style.transform = 'rotate(2deg)';
    });

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
    yoyoKeyword.addEventListener('click', () => {
        aboutPicture.src = yoyoSrc;
        aboutPicture.style.transform = 'rotate(4deg)';
    });

    yoyoKeyword.addEventListener('mouseover', () => {
        aboutPicture.src = yoyoSrc;
        aboutPicture.style.transform = 'rotate(4deg)';
    });

    yoyoKeyword.addEventListener('mouseout', () => {
        aboutPicture.src = meSrc;
        aboutPicture.style.transform = 'rotate(-2deg)';
    });
}