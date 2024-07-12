const burger = document.querySelector("#burger");
const burgerInner = document.querySelector(".burger__inner");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  if (burger.classList.contains("active")) {
    burgerInner.classList.add("open");
  } else {
    burgerInner.classList.remove("open");
  }
});

const swiper = new Swiper(".inside__item-swiper", {
  spaceBetween: 40,

  speed: 500,
  breakpoints: {
    1080: { slidesPerView: 2.8 },
    768: { slidesPerView: 2.5 },
    576: { slidesPerView: 2 },
    320: { slidesPerView: 1 },
  },
  navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
});

const cards = document.querySelectorAll(".card__flip");
cards.forEach((card) => {
  const openBtn = card.querySelector(".open-btn");
  const closeBtn = card.querySelector(".close-btn");
  const frontText = card.querySelector(".card__front-title");
  const cardFront = card.querySelector(".card__front");
  const image = card.querySelector("img");
  openBtn.addEventListener("click", () => {
    card.classList.add("flip");
  });
  closeBtn.addEventListener("click", () => {
    card.classList.remove("flip");
  });
  if (image) {
    cardFront.classList.add("has-image");
    card.style.borderColor = "#fff";

    frontText.style.color = "#fff";
    openBtn.style.color = "#fff";
  } else {
    cardFront.classList.add("no-image");
    card.style.border = "1px solid 402B1F";
    console.log(card.style.border);

    openBtn.style.color = "rgba(143, 141, 141, 1)";
  }
});
const carusel = new Swiper(".custom-swiper-container", {
  wrapperClass: "custom-swiper-wrapper",
  slideClass: "custom-swiper-slide",
  loop: true,
  autoplay: { delay: 400, disableOnInteraction: false },
  speed: 3000,

  allowTouchMove: false,
  simulateTouch: false,
  noSwiping: true,
  breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 5 } },
});
