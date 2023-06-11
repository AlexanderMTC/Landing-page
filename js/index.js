(() => {
  const menuToggle = document.getElementById("check__menu"),
    menuLink = document.querySelectorAll(".menu__link"),
    scrollButton = document.querySelector(".scrollTop"),
    lightbox = document.querySelectorAll(".gallery__img"),
    lightClose = document.querySelector(".gallery__lightbox--close");

  // Menu //

  menuLink.forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.checked = false;
    });
  });

  // Scroll //

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

  //Lightbox //

  lightbox.forEach((imagen) => {
    imagen.addEventListener("click", () => {
      document.querySelector(".gallery__lightbox").style.display = "block";
      document.querySelector(".gallery__img--show").src =
        imagen.getAttribute("src");
      document.querySelector(".gallery__img--show").alt =
        imagen.getAttribute("alt");
    });
  });

  lightClose.addEventListener("click", () => {
    document.querySelector(".gallery__lightbox").style.display = "none";
  });
})();
