const swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    1080: {
      slidesPerView: 3.2,
    },
    768: {
      slidesPerView: 2.5, // Показывать 2.5 слайда на планшете
    },
    576: {
      slidesPerView: 2, // Показывать 2 слайда на мобильном устройстве
    },
    320: {
      slidesPerView: 1, // Показывать 1 слайд на самых узких экранах
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const cards = document.querySelectorAll(".inside__card");

cards.forEach((card) => {
  console.log("fff");
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

    card.style.borderColor = "#fff"; // Зеленый цвет для бордера
    openBtn.style.borderColor = "#fff"; // Темно-зеленый цвет для бордера кнопки
    frontText.style.color = "#fff";
  } else {
    cardFront.classList.add("no-image");
    card.style.border = "1px solid 402B1F";
    console.log(card.style.border);
    openBtn.style.borderColor = "rgba(64, 43, 31, 1)"; // Темно-зеленый цвет для бордера кнопки
    openBtn.style.color = "rgba(64, 43, 31, 1)";
  }
});
