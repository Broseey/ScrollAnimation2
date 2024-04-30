const app = document.querySelector(".app");

const nav = document.querySelector(".nav"),
  targetHero = nav.querySelector("#hero"),
  targetGallery = nav.querySelector("#gallery"),
  targetFooter = nav.querySelector("#footer");

const heroText = document.querySelector(".hero_title > h1");
const footerText = document.querySelector(".footer_title > h1");

init = () => {
  gsap.set([heroText, footerText], { y: "100%" });
};

home = () => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    lerp: 0.08,
  });

  onScrollBy = (e) => {
    const id = e.srcElement.id;
    const selector = document.querySelector("." + id);

    if (selector) scroll.scrollTo(selector);
  };

  scroll.on("call", (value) => {
    if (value === "hero") {
      gsap.to(heroText, {
        duration: 1.4,
        y: 0,
        ease: 'expo.inOut',
      });
    }

    if (value === "footer") {
      gsap.to(footerText, {
        duration: 1.4,
        y: 0,
        ease: 'expo.inOut',
      });
    }
  });
};

addEventListeners = () => {
  targetHero.addEventListener("click", onScrollBy);
  targetGallery.addEventListener("click", onScrollBy);
  targetFooter.addEventListener("click", onScrollBy);
};
window.onload = () => {
  init();
  home();
  addEventListeners();
};
