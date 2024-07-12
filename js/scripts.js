const body = document.body;
const loaderInner = document.querySelector(".loader__inner");
const header = document.querySelector(".header");
const burger__inner = document.querySelector(".burger__inner");
const burger = document.querySelector("#burger");
const burgerInner = document.querySelector(".burger__inner");
const screenWidth = window.innerWidth;
const logo = document.querySelector("#logo");

const imagesLoader = document.querySelectorAll(".loader__img");
let currentIndex = 0;

const time = 0;
const step = 1;

function animationLoaderImg() {
  const timer = setInterval(() => {
    // Скрыть текущее активное изображение
    imagesLoader[currentIndex].classList.remove("active");
    // Увеличить индекс для следующего изображения
    currentIndex = (currentIndex + 1) % imagesLoader.length;
    // Показать следующее изображение
    imagesLoader[currentIndex].classList.add("active");
  }, 1000); // Каждую секунду меняем активное изображение

  return () => {
    clearInterval(timer);
  };
}

function outNum(num, elem) {
  let e = document.querySelector(elem);
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    e.innerHTML = `${n}%`;
  }, t);
}

function showLoader() {
  loaderInner.style.display = "flex";
}

function hideLoader() {
  loaderInner.style.display = "none";
}

function loadData() {
  const stopAnimation = animationLoaderImg(); // Запускаем анимацию и сохраняем функцию остановки

  outNum(100, ".counter");
  showLoader();

  setTimeout(function () {
    hideLoader();
    stopAnimation(); // Останавливаем анимацию изображений
  }, time);
}

if (body.children.length < 10) {
  console.log(body.children.length);
  loadData();
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
    logo.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
    logo.classList.remove("scrolled");
  }
});

function setTranslateYBurgerInner() {
  if (screenWidth <= 980) {
    const headerH = header.offsetHeight;
    burgerInner.style.transform = `translateY(${headerH - 2}px)`;
  }
}
function removeTranslateYBurgerInner() {
  if (burgerInner.style.transform) {
    burgerInner.style.transform = "";
  }
}

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  if (burger.classList.contains("active")) {
    burgerInner.classList.add("open");
    header.classList.add("scrolled");
    logo.classList.add("scrolled");

    // window.addEventListener("resize", function () {
    //   setTranslateYBurgerInner();
    // });
    setTranslateYBurgerInner();
  } else {
    removeTranslateYBurgerInner();

    burgerInner.classList.remove("open");
  }
});

const swiper = new Swiper(".inside__item-swiper", {
  spaceBetween: 40,
  keyboard: {
    enabled: true, // Включаем управление с клавиатуры
  },
  speed: 500,
  breakpoints: {
    1080: { slidesPerView: 2.8 },
    768: { slidesPerView: 2.5, spaceBetween: 20 },
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
  spaceBetween: 40,
  allowTouchMove: false,
  simulateTouch: false,
  noSwiping: true,
  breakpoints: {
    980: { slidesPerView: 3 },
    1024: { slidesPerView: 4.2 },
  },
});

const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach((header) => {
  header.addEventListener("click", function () {
    const currentContent = this.nextElementSibling;
    const icon = this.querySelector(".accordion-icon");
    console.log(icon);

    if (currentContent.style.maxHeight) {
      currentContent.style.maxHeight = null;

      icon.classList.remove("active");
    } else {
      console.log(currentContent.scrollHeight);
      currentContent.style.maxHeight = currentContent.scrollHeight + "px";
      icon.classList.add("active");
    }
  });
});
