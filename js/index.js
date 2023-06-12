(() => {
  const menuToggle = document.getElementById("check__menu"),
    menuLink = document.querySelectorAll(".menu__link"),
    scrollButton = document.querySelector(".scrollTop"),
    lightbox = document.querySelectorAll(".gallery__img"),
    lightClose = document.querySelector(".gallery__lightbox--close"),
    sliders = document.querySelectorAll(".gallery__img"),
    buttonNext = document.querySelector(".gallery__rightArrow"),
    buttonBefore = document.querySelector(".gallery__leftArrow");

  let value;

  // MENU //

  menuLink.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  });

  // SCROLL //

  scrollButton.addEventListener("click", (e) => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    menuToggle.checked = false;
  });

  window.addEventListener("scroll", (e) => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

  // LIGHTBOX //
  //Lightbox--Slider //

  buttonNext.addEventListener("click", () => {
    changeProsition(1);
  });

  buttonBefore.addEventListener("click", () => {
    changeProsition(-1);
  });

  const changeProsition = (add) => {
    currentImg = document.querySelector(".gallery__img--show").dataset.id;
    value = Number(currentImg);
    value += add;

    if (value === sliders.length + 1 || value === 0) {
      value = value === 0 ? sliders.length : 1;
    }

    document.querySelector(".gallery__img--show").src =
      sliders[value - 1].getAttribute("src");
    document.querySelector(".gallery__img--show").alt =
      sliders[value - 1].getAttribute("alt");
    document.querySelector(".gallery__img--show").dataset.id =
      sliders[value - 1].getAttribute("data-id");
  };

  //Lightbox--Show //

  lightbox.forEach((imagen) => {
    imagen.addEventListener("click", () => {
      document.querySelector(".gallery__lightbox").style.display = "grid";
      document.querySelector(".gallery__img--show").src =
        imagen.getAttribute("src");
      document.querySelector(".gallery__img--show").alt =
        imagen.getAttribute("alt");
      document.querySelector(".gallery__img--show").dataset.id =
        imagen.getAttribute("data-id");
    });
  });

  //Lightbox--Close //

  lightClose.addEventListener("click", () => {
    document.querySelector(".gallery__lightbox").style.display = "none";
  });
})();
