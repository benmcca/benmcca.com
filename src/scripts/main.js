const setupNavigation = () => {
  const checkbox = document.querySelector("#hamburgerCheckbox");
  const menuLinks = document.querySelectorAll(".navItem, .logo");

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      const offset =
        window.innerWidth <= 1024
          ? 60
          : (document.querySelector(".menubar")?.offsetHeight ?? 0);

      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });

      if (checkbox) checkbox.checked = false;
    });
  });
};

const setupAboutImage = () => {
  const picture = document.querySelector(".about-picture");
  if (!picture) return;

  const defaultImage = picture.dataset.defaultImage;
  let resetTimer;

  const setImage = (src, rotation) => {
    const syncDimensions = () => {
      picture.width = picture.naturalWidth;
      picture.height = picture.naturalHeight;
    };

    picture.addEventListener("load", syncDimensions, { once: true });
    picture.src = src;
    if (picture.complete) syncDimensions();
    picture.style.transform = `rotate(${rotation})`;
  };

  document.querySelectorAll("[data-about-image]").forEach((keyword) => {
    const showImage = () => {
      clearTimeout(resetTimer);
      setImage(keyword.dataset.aboutImage, keyword.dataset.rotation);
    };

    const resetImage = () => {
      clearTimeout(resetTimer);
      resetTimer = setTimeout(() => {
        setImage(defaultImage, "-2deg");
      }, 200);
    };

    keyword.addEventListener("mouseenter", showImage);
    keyword.addEventListener("mouseleave", resetImage);
    keyword.addEventListener("focus", showImage);
    keyword.addEventListener("blur", resetImage);
    keyword.addEventListener("click", showImage);
  });
};

const setupPressAnimations = () => {
  document.querySelectorAll(".helloImage, .menubar img").forEach((image) => {
    image.addEventListener("click", () => {
      image.style.transform = "scale(0.95)";
      setTimeout(() => {
        image.style.transform = image.classList.contains("logo")
          ? "scale(1.25)"
          : "";
      }, 100);
    });
  });
};

setupNavigation();
setupAboutImage();
setupPressAnimations();
