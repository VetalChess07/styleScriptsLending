document.addEventListener("DOMContentLoaded", function () {
  const pageFlip = new St.PageFlip(document.getElementById("bookContainer"), {
    width: 352, // Ширина контейнера для двух страниц (по 400px на каждую)
    height: 553, // Высота страницы
    view: "double", // Отображение двойной страницы
    usePortrait: false,
  });

  pageFlip.loadFromImages([
    "../image/book_img.png",
    "../image/book_img2.png",
    "../image/book_img3.png",
    "../image/book_img.png",
    "../image/book_img2.png",
    "../image/book_img3.png",

    // Добавьте пути к другим изображениям
  ]);
});
