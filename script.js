`use strict`;

//SLIDE FUNCTION
const slideFunct = () => {
  const slides = document.querySelectorAll(`.section-container`);
  const navContainer = document.querySelector(`.main-nav`);
  const navLinks = document.querySelectorAll(`.nav-link`);

  const goToSlide = (slide) => {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const activateSlide = (slide) => {
    navLinks.forEach((link) => link.classList.remove(`active`));
    document
      .querySelector(`.nav-link[data-slide="${slide}"]`)
      .classList.add(`active`);
  };

  const init = () => {
    goToSlide(0);
    activateSlide(0);
  };

  //EVENT HANDLERS

  navContainer.addEventListener(`click`, function (e) {
    // console.log(e.target);
    const el = e.target.closest(`.nav-link`);
    if (el) {
      const { slide } = el.dataset;
      activateSlide(slide);
      goToSlide(slide);
    }
  });

  init();
};

slideFunct();
