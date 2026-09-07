const setupNavigation = () => {
  const checkbox = document.querySelector("#hamburgerCheckbox");
  const menuLinks = document.querySelectorAll(".navItem, .logo");
  const sectionLinks = document.querySelectorAll(".navItem");
  const sections = document.querySelectorAll("main section[id]");

  let isManualScroll = false;
  let manualScrollTimer;

  const getOffset = () =>
    window.innerWidth <= 1024
      ? 60
      : (document.querySelector(".menubar")?.offsetHeight ?? 0);

  const setActiveLink = (activeLink) => {
    sectionLinks.forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateActiveLink = () => {
    if (isManualScroll) return; // don't fight the click-triggered scroll

    const currentPosition = window.scrollY + getOffset() + 1;
    let activeSection = sections[0];

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 1
    ) {
      activeSection = sections[sections.length - 1];
    } else {
      sections.forEach((section) => {
        if (section.offsetTop <= currentPosition) activeSection = section;
      });
    }

    const matchingLink = Array.from(sectionLinks).find(
      (link) => link.getAttribute("href") === `#${activeSection.id}`,
    );
    setActiveLink(matchingLink ?? null);
  };

  menuLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));
      if (!target) return;

      event.preventDefault();
      const offset = getOffset();
      const destination = Math.max(0, target.offsetTop - offset);

      // Lock the active link immediately so scroll events don't override it
      if (sectionLinks.length && Array.from(sectionLinks).includes(link)) {
        setActiveLink(link);
      }

      isManualScroll = true;
      clearTimeout(manualScrollTimer);

      window.scrollTo({
        top: destination,
        behavior: "smooth",
      });

      if (checkbox) checkbox.checked = false;

      const release = () => {
        isManualScroll = false;
        updateActiveLink();
      };

      if ("onscrollend" in window) {
        window.addEventListener("scroll", () => {}, { once: true }); // noop, keeps intent clear
        window.addEventListener(
          "scrollend",
          () => {
            release();
          },
          { once: true },
        );
      } else {
        // Fallback for browsers without `scrollend`: poll until we're within
        // a couple pixels of the destination, then release the lock.
        const poll = () => {
          if (Math.abs(window.scrollY - destination) <= 2) {
            release();
          } else {
            manualScrollTimer = setTimeout(poll, 50);
          }
        };
        manualScrollTimer = setTimeout(poll, 50);
      }
    });
  });

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("resize", updateActiveLink);
  updateActiveLink();
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
